const express = require('express')
const Router = express.Router

const PurchaseController = new Router()

PurchaseController.get('/bags', function(req, res, next){
    console.log('return all bags')
})
PurchaseController.get('accessories', function(req, res, next){
    console.log('return all accessories')
})
PurchaseController.post('/confirm-purchase', function(req, res, next){
    res.send('Please confirm your purchase')
})

module.exports = PurchaseController