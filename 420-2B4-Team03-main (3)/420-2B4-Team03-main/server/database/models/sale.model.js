const mongoose = require("mongoose");
const delivery = require("./delivery.model");
const payment = require("./payment.model");
const User = require("./user.model");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    qst: {
      type: Number,
      required: true,
    },
    gst: {
      type: Number,
      required: true,
    },
    shipping: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    itemsCart: {
      type: Array,
      required: true,
    },
    delivery: delivery,
    payment: payment,
  },
  { timestamp: true }
);

const Sale = mongoose.model("Sale", schema);
module.exports = Sale;
