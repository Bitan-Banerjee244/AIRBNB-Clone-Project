import mongoose from "mongoose";


let userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please Enter Your Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Enter Your Password"],
        minlength: [6, "Password must be at least 6 characters"],
        maxlength: [64, "Password cannot exceed 64 characters"]
    },
    listings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing"
    }],
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }]

}, { timestamps: true })

let User = mongoose.model("User", userSchema);
export default User;