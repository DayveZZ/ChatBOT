import mongoose from "mongoose";

const userScema = new mongoose.Schema({
  sender: {
    type: String,
    require: true,
    enum: ["user"],
  },
  text: {
    type: String,
    require: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userScema);

export default User;
