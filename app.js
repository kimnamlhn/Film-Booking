const express = require('express')
const db = require('./utils/db');
const app = express()
const port = 3000;

app.use(express.static('public'))

db.load('use mydb');
const users = db.load('select * from users');
users.then(function(rows){
  console.log(rows);
})
users.catch(function(rows){
  console.error(rows);
})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})