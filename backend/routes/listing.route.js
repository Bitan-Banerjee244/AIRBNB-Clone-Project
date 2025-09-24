import express from "express"
import { upload } from "../middlewares/multur.js";
import { createListing, showAllListing } from "../controllers/listing.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const listRouter = express.Router()

listRouter.post("/createlisting", isAuthenticated, upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
]), createListing)

listRouter.get("/showalllisting", showAllListing);

export default listRouter;