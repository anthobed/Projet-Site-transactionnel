const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

schema.virtual("total").get(function () {
  return +(this.quantity * this.price).toFixed(2);
});

const Line = mongoose.model("itemCart", schema);
module.exports = Line;
