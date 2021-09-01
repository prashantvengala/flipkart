const express = require("express");
const userSignup = require("../controllers/userController");
const userLogin = require("../controllers/userController");
const getProducts = require("../controllers/productController")

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProducts);

module.exports = router;
