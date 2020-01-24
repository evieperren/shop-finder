const express = require('express')
const Router = express.Router

const router = new Router()

router.use('/shop', require('./controller/ShopController'))
router.use('/purchase', () => (require('./controller/PurchaseController')))

router.get('/trial', (req, res, next) => {
    console.log('made it to routers page')
})
module.exports = router
