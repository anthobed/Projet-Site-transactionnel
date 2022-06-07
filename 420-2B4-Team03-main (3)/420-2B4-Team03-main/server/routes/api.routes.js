const router = require("express").Router();
const saleRouter = require("./sale.routes");
const itemsRouter = require("./items.routes");
const cartRouter = require("./cart.routes");
const usersRouter = require("./users.routes");
const authRouter = require("./auth.routes");

router.use("/items", itemsRouter);
router.use("/sale", saleRouter);
router.use("/cart", cartRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

module.exports = router;
