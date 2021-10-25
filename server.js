const express = require('express')
const path = require("path");

const app = express()

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

app.listen(4000, (req, res) => {
    console.log('server on 4000')
})
