import express from "express"
import { cancelBooking, createBooking } from "../controllers/booking.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const bookingRouter = express.Router();

bookingRouter.post("/createbooking", isAuthenticated, createBooking);
bookingRouter.delete("/cancelbooking/:bookingId", cancelBooking)

export default bookingRouter;