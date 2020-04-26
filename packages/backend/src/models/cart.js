const mongoose = require('mongoose')

//Cart Schema
const cartSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Carts', cartSchema)