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

router.put('/api/burgers', (req, res) => {
    let id = req.body 
    console.log(id)

    // burger.updateOne(id).then((data) => {
    //     if (data.changedRows == 0) {
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    // })
})

module.exports = router