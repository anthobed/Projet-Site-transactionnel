const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const delivery = require("./delivery.model");
const payment = require("./payment.model");
const schema = mongoose.Schema;

const userSchema = schema({
  name: { type: String, required: true },
  birthday: { type: Date },
  gender: { type: String },
  local: {
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },

  deliverys: [delivery],
  payments: [payment],
  itemsCart: { type: Array },
});

userSchema.statics.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  } catch (e) {
    throw e;
  }
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.local.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
