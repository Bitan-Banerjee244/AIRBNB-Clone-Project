import express from "express"
import { createBooking } from "../controllers/booking.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const bookingRouter = express.Router();

bookingRouter.post("/createbooking", isAuthenticated, createBooking);

export default bookingRouter;