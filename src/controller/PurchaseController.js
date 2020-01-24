const express = require('express')
const Router = express.Router

const PurchaseController = new Router()

PurchaseController.get('/form', function(req, res, next){
    console.log('fill out your details')
})
PurchaseController.get('payment-method', function(req, res, next){
    console.log('pay here')
})
PurchaseController.post('/confirm-purchase', function(req, res, next){
    res.send('Please confirm your purchase')
})
module.exports = PurchaseController