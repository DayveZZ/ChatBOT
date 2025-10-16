import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import chatbotRoutes from "./routes/chatbot.route.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

// Middlewere
app.use(express.json());
app.use(cors());

// Database Connect
mongoose
  .connect(process.env.MONGO_URI) // <-- fixed this line
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/bot/v1/chatbot", chatbotRoutes);

app.get("/", (req, res) => res.send("Hello World !!!"));

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
