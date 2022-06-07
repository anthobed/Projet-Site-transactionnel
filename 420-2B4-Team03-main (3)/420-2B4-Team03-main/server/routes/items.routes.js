const router = require("express").Router();
const {
  getItems,
  getGeneratedItems,
  getItem,
} = require("../controllers/items.controllers");

router.get("/generatedItems", getGeneratedItems);
router.get("/", getItems);
router.get("/:id", getItem);

module.exports = router;
