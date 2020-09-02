require('dotenv').config()

const routes = require('./src/routes/routes')
const { resolve } = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const { globalMiddleware } = require('./src/middlewares')

mongoose.connect(process.env.CONNECTION_MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.emit('connect')
}).catch(e => console.log(e));

app.use(helmet()) // Segurança

app.use(express.urlencoded({extended: true})) // Ver req.body
app.use(express.json())
app.use(express.static(resolve(__dirname, 'public'))) // Caminho de arquivos estaticos
app.use(routes) // Usar rotas

app.use(globalMiddleware); // Usar meu middleware


app.set('views', resolve('src','views')) // Aonde está a pasta de views
app.set('view engine', 'ejs') // Usar template ejs

app.on('connect', () => {
  app.listen(3000, () => {
    console.log('Listen')
  })
})