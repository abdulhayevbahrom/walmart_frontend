const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    min: 2,
  },

  category: {
    type: String,
    min: 2,
  },

  image: {
    type: String,
  },

  quantity: {
    type: String,
    min: 1,
  },

  description: {
    type: String,
  },

  brend: {
    type: String,
  },

  price: {
    type: Number,
    min: 1,
  },

  addedTime: {
    type: String,
    default: new Date(),
  },
});

const pro = mongoose.model("products", userSchema);

module.exports = { pro };
