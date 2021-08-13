const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const server = express()
const path = require('path')

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

module.exports = server

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Main.html'))
})

server.use('/mood', routes)
