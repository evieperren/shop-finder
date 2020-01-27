const express = require('express')
const Router = express.Router
const mongoose = require('mongoose')

const ShopSchema = require('../models/shopSchema')
const ShopController = new Router()
const shopModel = mongoose.model('shop', ShopSchema)




// CREATE A SHOP - shops/create
ShopController.post('/create', (req, res, next) => {
    const shop = new shopModel({
        name: req.query.name, 
        type: req.query.type,
        location: {
            postcode: req.query.postcode,
            town: req.query.town,
        } 
    })

    res.send(req.query)
    shop.save()
    console.log("created a shop")
    next(shop)
})

// RETURN ALL SHOPS
ShopController.get('/', (req, res, next) => {
    shopModel.find((err, result) => {
        res.json(result)
    })

    console.log('List all shops')
    next()
})

// RETURN A SINGLE SHOP - shops/:shop_Id?
ShopController.get('/:shop_id', (req, res, next) => {
    shopModel.findById(req.params.shop_id)
        .then((shopFound) => {res.send(shopFound)})
    console.log("returned a single shop")
})

// UPDATE A SINGLE SHOP - shops/:shop_id
ShopController.put('/:shop_id', (req, res, next) => {
    shopModel.findById(req.params.shop_id)
        .then((shopFound) => {
            shopFound.location.postcode = "NH78 7FD"
            shopFound.location.town = "Northampton"
            res.send(shopFound)
            shopFound.save()
        })
    console.log("Updated a single shop")
})

// DELETE A SINGLE SHOP - shops/
ShopController.delete('/:shop_id', (req, res, next) => {
    shopModel.findByIdAndDelete(req.params.shop_id) 
    console.log("Deleted a single shop")
    res.send(`Shop: ${req.params.name} has been deleted from database`)
})

module.exports = ShopController