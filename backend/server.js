import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.routes.js";

const app = express();
let port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))

// Routes
app.use("/api/v2", authRouter);
app.use("/api/v2", userRouter);


app.get("/", (req, res) => {
    res.send("Server Started");
})

app.listen(port, () => {
    connectDB();
    console.log(`Server started ta http://localhost:${port}`);
})