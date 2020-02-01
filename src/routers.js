const express = require('express')
const Router = express.Router

const router = new Router()

// middle wear to use for all requests (this is often used to perform safety checks for the incoming request) + this is also a good place to check for authentication of the user
router.use((req, res, next) => {
    console.log('made it to the router page')
    next()
    
})
router.use('/shops', require('./controller/ShopController'))
// router.use('/purchase', () => (require('./controller/PurchaseController')))


module.exports = router
