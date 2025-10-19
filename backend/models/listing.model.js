import mongoose from "mongoose"

let listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    image1: {
        url: { type: String, required: true },
        public_id: { type: String, required: true }
    },
    image2: { url: String, public_id: String },
    image3: { url: String, public_id: String },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    category: { type: String, default: "Houses" },

    isBooked: {
        type: Boolean,
        default: false
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    }

}, { timestamps: true })

let Listing = mongoose.model("Listing", listingSchema);
export default Listing;