const express = require('express')
const burger = require('../models/burger.js')
const router = express.Router()

router.get('/', (req, res) => {

    // select all data from database
    burger.selectAll()
        .then( data => {

            let burgerObj = {
                burger: data
            }

            res.render('index', burgerObj)
        })
})

router.post('/api/burgers', (req, res) => {
    let newBurger = req.body

    // add to database
    burger.insertOne(newBurger)
})

router.put('/api/burgers/:id', (req, res) => {
    let id = req.params.id 

    // update database
    burger.updateOne(id)
})

module.exports = router