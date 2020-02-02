const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')

mongoose.connect('mongodb://localhost:27014/shopDB', { useNewUrlParser: true })
const db = mongoose.connection
const app = express()

db.once('open', function () {
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended : true }))
    
    // Routes 
    app.use('/api', require('./routers'))
    console.log(' i am working here')

    ;(async () => {
        const response = await axios.get('http://localhost:3020/api/shops')
        
        console.log(response.data.forEach(shop => {
            console.log(shop)
        }))
    })()
})

// module.exports = app