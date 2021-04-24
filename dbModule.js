const mongoose = require("mongoose");

const ArchiesSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Article", ArchiesSchema);
