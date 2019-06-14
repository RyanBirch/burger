// express setup
const express = require('express')
const app = express()

// set port
const PORT = process.env.port || 3000
app.listen(PORT, () => console.log('Listening on port ' + PORT))

// data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// serve static files from public folder
app.use(express.static('public'))

// Set Handlebars.
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes
const routes = require('./controllers/burgers_controller.js')
app.use(routes)