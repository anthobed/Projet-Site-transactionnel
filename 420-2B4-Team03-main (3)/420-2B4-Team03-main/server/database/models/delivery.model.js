const mongoose = require("mongoose");

const schema = mongoose.Schema({
  fullname: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  adress: {
    type: String,
  },
  apt: {
    type: String,
  },
  city: {
    type: String,
  },

  province: {
    type: String,
  },
  post: {
    type: String,
  },
});

module.exports = schema;
