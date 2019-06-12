const orm = requre('./../config/orm.js')

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

    updateOne: function(vals) {
        return new Promise((resolve, reject) => {

            orm.updateOne('burgers', vals)
                .then( data => resolve(data))
        })
    }
}

module.exports = burger