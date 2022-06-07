const router = require("express").Router();
const {
  signup,
  getCurrentUser,
  updateUser,
} = require("../controllers/users.controller");
const { fetchUserFromToken } = require("../middlewares/auth.middleware");

router.post("/", signup);
router.get("/token", fetchUserFromToken, getCurrentUser);
router.patch("/", updateUser);

module.exports = router;
