const Product = require("../model/productSchema");

const getProducts = async (req, res) => {
  try {
    let products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log("Error", error.message);
  }
};

module.exports = getProducts;
