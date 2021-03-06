const express = require('express')
const path = require("path")
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const reactDB = require('./server/connection/connection')

app.use(cors({origin: '*'}))
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use('/', require('./server/routes/router'))
reactDB()

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
// })

app.listen(port, (req, res) => {
    console.log(`server on http://18.216.129.234/:${port}`)
})