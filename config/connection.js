require('dotenv').config()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.PASS,
  database: 'burgers_db'
})

module.exports = connection