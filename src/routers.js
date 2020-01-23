const express = require('express')
const Router = express.Router

const router = new Router()

router.get('/shop', require('./controller/ShopController'))
router.get('/purchase', require('./controller/PurchaseController'))

module.exports = router