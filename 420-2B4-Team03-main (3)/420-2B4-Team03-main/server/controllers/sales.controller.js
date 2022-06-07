const { getCart, deleteCart } = require("../queries/cart.queries");
const { createSale } = require("../queries/sales.queries");
const { findUserByEmail, updateUser } = require("../queries/users.queries");

exports.addSale = async (req, res, next) => {
  try {
    const sale = req.body;

    const newSale = await createSale(sale);

    const newUser = await findUserByEmail(newSale.email);

    newUser.itemsCart = [];

    await updateUser(newUser);

    res.json(newSale);
  } catch (err) {
    next(err);
  }
};
