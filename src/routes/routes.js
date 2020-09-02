const express = require('express')
const route = express.Router() // Instancia do roteamento
const HomeController = require('../controllers/HomeController')
const ContactController = require('../controllers/ContactController')

// Rotas da home
route.get('/',  HomeController.index)
route.post('/', HomeController.store)

// Rotas de contato
route.get('/contact', ContactController.index)


module.exports = route