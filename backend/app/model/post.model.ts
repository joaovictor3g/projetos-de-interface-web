import { Schema, model } from "mongoose";

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },

  likes: {
    type: Number,
    required: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const postModel = model("Post", postSchema);
