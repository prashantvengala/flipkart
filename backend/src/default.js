const products = require("./constants/product.js");
const Product = require("./model/productSchema");
const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data imported");
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = DefaultData;
