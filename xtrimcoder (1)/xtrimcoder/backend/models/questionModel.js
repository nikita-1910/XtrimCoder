const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
{
  title: { type: String, required: true, trim: true, minlength: 3 },
  body: { type: String, required: true,trim: true },
  solution: { type: String, required: true },
  tags:{ type: String, required: true },
  date: { type: Date, required: true },
  comments:[String]
},
{timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
