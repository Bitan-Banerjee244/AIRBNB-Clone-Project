import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCurrentUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/currentuser",isAuthenticated,getCurrentUser);

export default userRouter;