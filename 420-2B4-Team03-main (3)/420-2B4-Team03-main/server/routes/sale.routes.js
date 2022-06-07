const router = require("express").Router();

const { addSale } = require("../controllers/sales.controller");

router.post("/", addSale);

module.exports = router;
