const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const SwaggerParser = require('swagger-parser')
const swaggerRoutes = require('swagger-routes-express')
const API = require('./api/shop')

mongoose.connect('mongodb://localhost:27014/shopDB', {useNewUrlParser: true})
const db = mongoose.connection
const app = express()

db.once('open', async ()  => {
    app.use(bodyParser.urlencoded({ extended : true }))
    
    // Routes 
    app.use(require('./routers'))
    console.log(' i am working here')

    const parser = new SwaggerParser()
    const apiDescription = await parser.validate('shopsDefinition.yaml')
    const connect = swaggerRoutes(API, apiDescription)
    connect(app)
})

module.exports = app