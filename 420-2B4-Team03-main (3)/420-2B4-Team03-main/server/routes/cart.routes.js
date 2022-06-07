const { uptadeCart, getCart } = require("../controllers/cart.controllers");

const router = require("express").Router();

router.get("/", getCart);
router.patch("/", uptadeCart);

module.exports = router;
