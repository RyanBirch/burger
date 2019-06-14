const express = require('express')
const burger = require('./../models/burger.js')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/api/burgers', (req, res) => {
    let burger = req.body

    // use orm functions to put this in the database
})

module.exports = router