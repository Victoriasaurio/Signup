const express = require('express')
const app = express.Router()

//controllers
const register = require('../controllers/create')

app.post('/create', register.create)

module.exports = app