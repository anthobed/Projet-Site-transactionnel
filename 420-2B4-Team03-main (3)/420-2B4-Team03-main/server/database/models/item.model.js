const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxLength: [125, "Name must be at most 125 characters"],
    },
    description: {
      type: String,
      maxLength: [3000, "Description must be at most 3000 characters"],
    },
    image: {
      type: String,
    },
    price: {
      type: Number,

      required: true,
    },
    rating: {
      type: Number,
      maxLength: [5, "Must be below 5 "],
    },
    brand: {
      type: String,
      minLength: [2, "{VALUE} must be at least 2 characters"],
      maxLength: [100, "{VALUE} must be at most 30 characters"],
    },
    category: {
      type: String,
      minLength: [2, "{VALUE} must be at least 2 characters"],
      maxLength: [30, "{VALUE} must be at most 30 characters"],
    },
    alcohol: {
      type: Number,
      maxLength: [100],
    },
    listOfIngredients: {
      type: Array,
    },
    foodPairing: {
      type: Array,
    },
    promotion: {
      type: Boolean,
      get: () => this.featuredExpiration - Date.now > 0,
    },
    discountPercentage: {
      type: Number,
    },
    fulltexte: {
      type: String,
    },
    featuredExpiration: {
      type: Number,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Item = mongoose.model("Item", schema);
module.exports = Item;
