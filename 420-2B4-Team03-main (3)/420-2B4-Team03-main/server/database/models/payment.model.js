const mongoose = require("mongoose");

const schema = mongoose.Schema({
  numbercard: {
    type: Number,
    require: true,
  },
  expirationMounth: {
    type: String,
    required: true,
  },
  expirationYear: {
    type: Number,
    required: true,
  },
  ccv: {
    type: Number,
    required: true,
  },
});

module.exports = schema;
