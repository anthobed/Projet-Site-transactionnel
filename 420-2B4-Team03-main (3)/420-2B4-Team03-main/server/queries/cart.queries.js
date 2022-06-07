const itemCart = require("../database/models/itemCart.model");

exports.getCart = () => {
  return itemCart.find({}).exec();
};

exports.deleteCart = () => {
  return itemCart.deleteMany({});
};

exports.createItemInCart = (cart) => {
  for (var i = 0; i < cart.length; i++) {
    const newitemCart = new itemCart({
      id: cart[i].id,
      quantity: cart[i].quantity,
      name: cart[i].name,
      price: cart[i].sale_price,
      image: cart[i].image,
    });
    newitemCart.save();
  }

  return cart;
};
