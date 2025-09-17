import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./db/db";
import cookieParser from "cookie-parser";

const app = express();
let port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server Started");
})

app.listen(port, () => {
    connectDB();
    console.log(`Server started ta http://localhost:${port}`);
})