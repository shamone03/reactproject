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
app.use(bodyParser.json())
reactDB()

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.use('/', require('./server/routes/router'))

app.listen(port, (req, res) => {
    console.log(`server on ${port}`)
})
