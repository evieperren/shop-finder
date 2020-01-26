const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const YAML = require('yamljs')
const { connector } = require('swagger-routes-express')
const API = require('./api/shop')
const shopModel = require('./models/shopSchema')

mongoose.connect('mongodb://localhost:27014/shopDB', { useNewUrlParser: true })
const db = mongoose.connection
const app = express()

db.once('open', function () {
    app.use(bodyParser.urlencoded({ extended : true }))
    
    // const apiDescription = YAML.load('shopDefinition.yaml')
    // const connect = connector(API, apiDescription)
    // connect(app)
    // Routes 
    app.use(require('./routers'))
    console.log(' i am working here')
})

module.exports = app