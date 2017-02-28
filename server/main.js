const express = require('express')
const ejs = require('ejs')

const app = new express()

// Set ejs as default engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('./../app/index.ejs', {})
  // res.send({"text": "Hello, world!"})
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777)
