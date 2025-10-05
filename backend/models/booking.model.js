import mongoose from "mongoose"

let bookingSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rentingHouse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },

}, { timestamps: true })

let Booking = mongoose.model("Booking", bookingSchema);
export default Booking;