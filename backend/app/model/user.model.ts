import mongoose from "mongoose";
import { User } from "../@types/user";

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    index: {
      unique: true,
    },
  },

  password: {
    type: String,
    required: true,
  },
});

export const userModel = mongoose.model("User", userSchema);
