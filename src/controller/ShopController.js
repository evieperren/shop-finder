const express = require('express')
const Router = express.Router
const mongoose = require('mongoose')

const ShopSchema = require('../models/shopSchema')
const ShopController = new Router()
const shopModel = mongoose.model('shop', ShopSchema)
// complete UI

// CREATE A SHOP - shops/
ShopController.post('/', (req, res, next) => {
    const shop = new shopModel({
        name: req.body.name, 
        type: req.body.type,
        location: {
            postcode: req.body.location.postcode,
            town: req.body.location.town,
        } 
    })
    console.log(req)
    shop.save()
    res.send(shop)
    console.log("created a shop")
})

// RETURN ALL SHOPS
ShopController.get('/', async (req, res, next) => {
    await shopModel.find()
        .then((result) => {
            res.json(result)
        })
        .catch(error => console.log(new Error(error)))
})

// RETURN A SINGLE SHOP - shops/:shop_Id?
ShopController.get('/:shop_id', async (req, res, next) => {
    await shopModel.findById(req.params.shop_id)
        .then((shopFound) => {res.send(shopFound)})
        .catch(error => console.log(new Error(error)))
})

// UPDATE A SINGLE SHOP - shops/:shop_id
ShopController.put('/:shop_id', async (req, res, next) => {
    await shopModel.findById(req.params.shop_id)
        .then((shopFound) => {
            shopFound.name = req.body.name
            shopFound.type = req.body.type
            shopFound.location.postcode = req.body.location.postcode
            shopFound.location.town = req.body.location.town
            shopFound.save()
            res.send(shopFound)
        })
        .catch(error => console.log(new Error(error)))
})

// DELETE A SINGLE SHOP - shops/
ShopController.delete('/:shop_id', async (req, res, next) => {
    await shopModel.findByIdAndDelete(req.params.shop_id) 
    .then((doc) => {
        res.json({
            message: `Shop ${req.params.shop_id} has been deleted from database`
        })
    })
    .catch(error => console.log(new Error(error)))
})

module.exports = ShopController