import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  comment: {
    type: String,
    required: true,
  },
});

export const commentModel = model("Comment", commentSchema);
