const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema(
{
  question: { type: String, required: true, trim: true, minlength: 3 },
  body: { type: String, required: true,trim: true },
  author: { type: String, required: true },
  tags:{ type: String, required: true },
  date: { type: Date, required: true },
  comments:[String]
},
{timestamps: true }
);

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
