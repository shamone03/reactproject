const express = require('express')
const path = require("path");
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'client', 'build')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.get('/tasks', (req, res) => {
    res.header("Access-Control-Allow-Origin", `/`)

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
