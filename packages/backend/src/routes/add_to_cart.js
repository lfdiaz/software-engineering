const express = require("express");
const router = express.Router();
const Carts = require("../models/cart");

//Add to cart
router.post("/", async (req, res) => {
  let itemFound = await Carts.findOne({
    userId: req.query.userId,
    productId: req.query.productId
  });

  //If the item is found for a user then we update old quantity by adding new quantity
  if (itemFound) {
    itemFound.quantity = itemFound.quantity + req.body.quantity;
    itemFound.save();
    const items = await Carts.find({ userId: req.query.userId });
    res.json(items);
  } else {
    //Add the item for a user to the database if new
    const cart = new Carts({
      userId: req.query.userId,
      productId: req.query.productId,
      quantity: req.body.quantity
    });

    try {
      const newProductAdd = await cart.save();
      const items = await Carts.find({ userId: req.query.userId });
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
});

router.get("/", async (req, res) => {
  const { userId } = req.query;
  const items = await Carts.find({ userId });
  res.json(items);
});

module.exports = router;
