const express = require('express')
const Router = express.Router
const Shop = require('../models/shopSchema')
const ShopController = new Router()

// LIST ALL SHOPS - shops/list
ShopController.get('/list', (req, res, next) => {
    console.log('List all shops')
    
    res.send('yay')
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
})

module.exports = ShopController