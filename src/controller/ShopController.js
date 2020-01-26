const express = require('express')
const Router = express.Router
const Shop = require('../models/shopSchema')
const ShopController = new Router()

// LIST ALL SHOPS - shops/list
ShopController.get('/list', (req, res, next) => {
    Shop.find(function (err, Shop) {
        if (err)
        res.send(err);
        
        res.json(Shop);
    });
    console.log('List all shops')
    next()
})

// CREATE A SHOP - shops/create
ShopController.post('/create', (req, res, next) => {
    const Topshop = new Shop({
        name: "Topshop",
        type: "Clothes", 
        location: {
            postcode: "SP10 3NG",
            town: "Andover"
        }
    })
    res.send(Topshop)
    Topshop.save()
    console.log("created a shop")
    next()
})

// RETURN A SINGLE SHOP - shops/:shop_Id?
ShopController.get('/:shop_id', (req, res, next) => {
    Shop.findById(req.params.shop_id)
        .then((shopFound) => {res.send(shopFound)})
    console.log("returned a single shop")
})

// UPDATE A SINGLE SHOP - shops/:shop_id
ShopController.put('/:shop_id', (req, res, next) => {
    Shop.findById(req.params.shop_id)
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
    Shop.findByIdAndDelete(req.params.shop_id) 
    console.log("Deleted a single shop")
    res.send(`Shop: ${req.params.name} has been deleted from database`)
})

module.exports = ShopController