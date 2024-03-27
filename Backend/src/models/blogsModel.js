const mongoose = require("mongoose");

// Setting Up our Schema
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
  },{ timestamps: true });


module.exports = mongoose.model("Blog", blogSchema);
