const express = require('express')
const app = express()
const mysql = require('mysql')
const sql = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'szeleromu'
})
app.use( (req, res, next) => {
    res.header(
        'Access-Control-Allow-Origin',
        '*'
    )
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
} )
sql.connect()
app.get('/:nr', (req, res) => {
    sql.query(
      `SELECT *
       FROM helyszin
       WHERE nev like "%${
          req.params.nr
       }%"
       ORDER BY nev
       LIMIT 10`,
        (err, rows) => res.send(err ? err : rows)
    )
} )
app.get('/', (req, res) => {
    sql.query(
      `SELECT *
       FROM helyszin
       ORDER BY nev
       LIMIT 10`,
        (err, rows) => res.send(err ? err : rows)
    )
} )
app.listen(3000)