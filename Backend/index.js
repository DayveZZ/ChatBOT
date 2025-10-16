import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { genAi } from "./GeminiAi.js";

import chatbotRoutes from "./routes/chatbot.route.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/bot/v1/chatbot", chatbotRoutes);

// Test Gemini route
app.get("/test-gemini", async (req, res) => {
  try {
    const result = await genAi("Who is Messi?");
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Gemini API error");
  }
});

app.get("/", (req, res) => res.send("Hello World !!!"));

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));
