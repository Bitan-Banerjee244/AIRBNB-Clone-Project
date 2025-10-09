import User from "../models/user.model.js";

export const getCurrentUser = async (req, res) => {
    try {
        let userId = req.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User Not found"
            })
        }

        let user = await User.findById(userId).select("-password").populate({
            path: "listings",
            select: "title description price image1 image2 image3"
        }).populate({
            path: "bookings",
            select: "rentingHouse",
        });

        if (!user) {
            return res.status(500).json({
                success: false,
                message: "User doesn't exist"
            })
        }

        return res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(`Error Occurred in Get Current User : ${error}`)
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}