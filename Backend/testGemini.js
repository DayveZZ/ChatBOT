import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const ai = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

async function testGemini() {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent("Hello! Test key.");
    console.log(result.response.text());
  } catch (err) {
    console.error(err);
  }
}

testGemini();
