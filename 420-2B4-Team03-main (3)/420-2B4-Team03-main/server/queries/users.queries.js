const ITEM_IMAGE_PATH = "/images/items/";
const User = require("../database/models/user.model");

exports.findUserByID = (id) => {
  return User.findById(id, "-password");
};

exports.findUserByEmail = (email) => {
  return User.findOne({ "local.email": email });
};

exports.updateUser = (data) => {
  return User.findOneAndUpdate({ "local.email": data.local.email }, data, {
    runValidators: true,
    new: true,
  });
};

exports.createUser = async (data) => {
  const user = await this.findUserByEmail(data.email);
  if (user) throw new Error("Courriel déjà utilisé");

  const hashedPassword = await User.hashPassword(data.password);
  const newUser = new User({
    name: data.name,

    local: {
      email: data.email,
      password: hashedPassword,
    },
  });
  return newUser.save();
};

