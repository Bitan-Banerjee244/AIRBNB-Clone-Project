import mongoose from "mongoose";
import Listing from "../models/listing.model.js";
import User from "../models/user.model.js";
import uploadImage from "../utils/cloudinary.service.js";

export const createListing = async (req, res) => {
    try {
        let host = req.userId;
        let { title, description, category, price } = req.body;

        // Upload images to Cloudinary
        const image1 = await uploadImage(req.files.image1[0].path);
        const image2 = await uploadImage(req.files.image2[0].path);
        const image3 = await uploadImage(req.files.image3[0].path);

        // Create new listing
        let newListing = await Listing.create({
            title,
            description,
            category,
            price,
            host,
            image1,
            image2,
            image3
        });

        // Add listing ID to user's listings array
        await User.findByIdAndUpdate(
            host,
            { $push: { listings: newListing._id } },
            { new: true }
        );

        return res.status(201).json({
            success: true,
            list: newListing,
            message: "Listing Created Successfully!!"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Listing Creation Error"
        });
    }
};


export const showAllListing = async (req, res) => {
    try {
        let listing = await Listing.find().populate("host", "userName email");
        return res.status(200).json({
            success: true,
            list: listing
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            error: error.message,
            message: "Error to get All Listing Data"
        })
    }
}

export const getListData = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid House ID"
            });
        }

        const house = await Listing.findById(id);

        if (!house) {
            return res.status(404).json({
                success: false,
                message: "House not found"
            });
        }

        return res.status(200).json({
            success: true,
            house
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}