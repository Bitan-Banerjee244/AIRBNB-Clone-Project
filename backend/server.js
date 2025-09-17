import express from "express"
import "dotenv/config"
import cors from "cors"

const app = express();
let port = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.send("Server Started");
})

app.listen(port, () => {
    console.log(`Server started ta http://localhost:${port}`);
})