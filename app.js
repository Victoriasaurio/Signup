const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//IMPORT ROUTES
var routes = require('./routes/index')

//ROUTES GLOBALS
app.use('/api', routes)

module.exports = app