import { Schema, model } from "mongoose";
import { Post } from "../@types/post";

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
    required: true,
  },
});

export const postModel = model("Post", postSchema);
