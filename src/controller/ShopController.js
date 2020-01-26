const express = require('express')
const Router = express.Router
const Shop = require('../models/shopSchema')
const ShopController = new Router()

// LIST ALL SHOPS - shops/list
ShopController.get('/list', (req, res, next) => {
    console.log('List all shops')
    Shop.find(function (err, Shop) {
        if (err)
            res.send(err);

        res.json(Shop);
    });
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


// RETURN A SINGLE SHOP - shops/list/:shop_Id
ShopController.get('/:id', (req, res, next) => {
    Shop.findById(req.params.id)
        .then((shopFound) => res.send(shopFound))

    console.log(req.params)
    console.log("returned a single shop")
})



module.exports = ShopController