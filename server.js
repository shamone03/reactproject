const express = require('express')
const path = require("path");
const dotenv = require("dotenv")
const app = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'client', 'build')))


app.use('/', (req, res) => {
    res.sendFile(path.join('client', 'build', 'index.html'))
})

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.send({
        id: 5,
        title: 'todo5',
        body: 'mustdothis',
        checked: true
    })
})

app.listen(port, (req, res) => {
    console.log(`server on ${port}`)
})
