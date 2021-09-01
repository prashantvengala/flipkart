const express = require("express");
const userSignup = require("../controllers/userController");
const userLogin = require("../controllers/userController")

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);


module.exports = router;
