import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  matricula: {
    type: [String],
    required: true,
    index: {
      unique: true,
    },
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

export const studentModel = mongoose.model("Student", studentSchema);
