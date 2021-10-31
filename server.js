const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const morgan = require('morgan')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const reactDB = require('./server/connection/connection')
const model = require('./server/models/model')


app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use('/', require('./server/routes/router'))

reactDB()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})


app.listen(port, (req, res) => {
    console.log(`server on ${port}`)
})
