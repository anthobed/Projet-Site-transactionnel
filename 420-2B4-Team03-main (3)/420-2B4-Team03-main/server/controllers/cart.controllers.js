const {
  getCart,
  createItemInCart,
  deleteCart,
} = require("../queries/cart.queries");
const index = require("../data/index");

exports.uptadeCart = async (req, res, next) => {
  try {
    const cart = req.body;

    await deleteCart();
    await createItemInCart(cart);
    console.log("Le cart à était modifier");
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const cart = await getCart();
    res.json(cart);
  } catch (err) {
    next(err);
  }
};
