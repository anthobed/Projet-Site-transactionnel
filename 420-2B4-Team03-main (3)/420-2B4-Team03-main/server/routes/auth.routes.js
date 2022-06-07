const router = require("express").Router();
const { sessionCreate, sessionDelete } = require("../controllers/auth.controller")

router.post("/signin", sessionCreate)
router.get("/signout", sessionDelete)

module.exports = router;