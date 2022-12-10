const mongoose = require("mongoose");

const productScheme = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [10, "The title length should be at least 10 characters"],
    maxlength: [
      250,
      "The length of title cannot be greater than 250 characters",
    ],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [1, "Price should be at least Rs 1"],
  },
  description: {
    type: String,
    required: true,
    minlength: 1000,
  },
  category: {
    type: String,
    required: true,
    minlength: 1000,
  },
  image: {
    type: String,
    required: true,
    minlength: 1000,
  },
  rating: {
    rate: String,
    count: Number,
  },
  rate: {
    type: String,
    required: true,
    minlength: 100,
  },
  count: {
    type: String,
    required: true,
    minlength: 10,
  },
});

const ProductModel = mongoose.model("product", productScheme);
module.exports = ProductModel;
