const express = require("express");
const userSignup = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userSignup);

module.exports = router;
