const express = require('express')
const burger = require('../models/burger.js')
const router = express.Router()

router.get('/', (req, res) => {

    burger.selectAll()
        .then( data => {
            console.table(data)
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
    burger.selectAll().then(data => console.table(data))
})

router.put('/api/burgers/:id', (req, res) => {
    let id = req.params.id 
    console.log('id: ' + id)

    burger.updateOne(id)
    burger.selectAll().then(data => console.table(data))
})

module.exports = router