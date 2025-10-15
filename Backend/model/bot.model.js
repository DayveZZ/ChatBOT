import mongoose from "mongoose";

const botScema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Bot = mongoose.model("Bot", botScema);

export default Bot;
