const connection = require('./connection.js')

// mysql methods
const orm = {

    selectAll: function (table) {

        return new Promise((resolve, reject) => {
            let query = `SELECT * FROM ??`

            connection.query(query, [table], (err, results) => {
                if (err) throw err

                resolve(results)
            })
        })
    },

    insertOne: function(table, vals) {

        return new Promise((resolve, reject) => {
            let query = `INSERT INTO ?? SET ?`

            connection.query(query, [table, vals], (err, results) => {
                if (err) throw err 

                resolve(results)
            })
        })
    },

    updateOne: function(table, val) {
        
         return new Promise((resolve, reject) => {
             let query = `UPDATE ?? SET ?`

             connection.query(query, [table, vals], (err, results) => {
                 if (err) throw err 

                 resolve(results)
             })
         })
    }
}

module.exports = orm