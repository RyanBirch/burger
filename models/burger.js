const orm = require('./../config/orm.js')

const burger = {

    selectAll: function() {
        return new Promise((resolve, reject) => {

            orm.selectAll('burgers')
                .then( data => resolve(data))
        })
    },

    insertOne: function(vals) {
        return new Promise((resolve, reject) => {

            orm.insertOne('burgers', vals)
                .then( data => resolve(data))
        })
    },

    updateOne: function(id) {
        return new Promise((resolve, reject) => {

            orm.updateOne('burgers', id)
                .then( data => resolve(data))
        })
    }
}

module.exports = burger