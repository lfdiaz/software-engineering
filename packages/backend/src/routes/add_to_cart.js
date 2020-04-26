const express = require('express')
const router = express.Router()
const Carts = require('../models/cart')

//Add to cart
router.post('/', async (req, res) => {
    itemFound = await Carts.findOne({ userId: req.query.userId, productId: req.query.productId })

    //If the item is found for a user then we update old quantity by adding new quantity
    if (itemFound) {
        itemFound.quantity = itemFound.quantity + req.body.quantity
        itemFound.save()
        res.json(itemFound)
    } else {
        //Add the item for a user to the database if new
        const cart = new Carts ({ 
            userId: req.query.userId,
            productId: req.query.productId,
            quantity: req.body.quantity
        })

        try {
            const newProductAdd = await cart.save()
            res.json('Product added to cart')
        } catch(err) {
            res.status(400).json({ message: err.message })
        }
    }
})

module.exports = router