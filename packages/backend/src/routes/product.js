const express = require("express");
const router = express.Router();
const Product = require("../models/products");

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findOne({ _id: productId });
  res.json(product);
});

router.post("/", async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const newProduct = new Product({ name, description, price, quantity });
  newProduct.save();
  res.json(newProduct);
});

module.exports = router;
