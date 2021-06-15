import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import routes from "./routes/route.js";

const app = express();

app.use(cors());
app.use("/buy", routes);

app.get("/", (req, res) => {
    res.send('<h1>This is the Home Route.</h1>');
})

app.listen(7000, (req, res) => {
    console.log("Server started on port 7000.");
})