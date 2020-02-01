const mongoose = require('mongoose')

const ShopSchema = mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    location: {
        postcode: String,
        town: String
    }
})

module.exports = ShopSchema