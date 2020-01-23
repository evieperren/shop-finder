const express = require('express')
const Router = express.Router
const router = require('../routers')

const ShopController = new Router()

ShopController.get('/clothes', (req, res, next) => {
    console.log('clothes section')
    next()
})

ShopController.get('/groceries', (req, res, next) => {
    console.log('Tesco, asda, aldi, waitrose')
    next()
})

ShopController.get('/home', (req, res, next) => {
    console.log('Homebase, Wickes, John Lewis')
})

module.exports = ShopController