import Booking from "../models/booking.model.js";
import Listing from "../models/listing.model.js";
import User from "../models/user.model.js";

export const createBooking = async (req, res) => {
    try {
        let { checkIn, checkOut, totalPrice, customer, rentingHouse } = req.body;

        if (!checkIn || !checkOut || !totalPrice || !customer || !rentingHouse) {
            return res.status(400).json({
                success: false,
                message: "All Fields are required !!"
            })
        }

        let booking = await Booking.create({
            checkIn, checkOut, totalPrice, customer, rentingHouse
        })

        await User.findByIdAndUpdate(
            customer,
            { $push: { bookings: booking._id } },
            { new: true }
        );

        await Listing.findByIdAndUpdate(
            rentingHouse,
            { isBooked: true },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Booking is Successful!!",
            booking
        })


    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error Occurred on create booking API",
            error: error.message
        })
    }
}