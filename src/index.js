const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27014/shopDB', {useNewUrlParser: true})
const db = mongoose.connection
const app = express()

db.once('open', function() {
    app.use(bodyParser.urlencoded({ extended : true }))
    
    // Routes 
    app.use(require('./routers'))
})

module.exports = app