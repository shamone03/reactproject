const model = require("../models/model")
const jwt = require('jsonwebtoken')

exports.getTasks = (req, res) => {
    res.header("Access-Control-Allow-Origin", `/`)
    const token = req.headers['authorization']
    // console.log(token)
    // console.log(jwt.verify(token, process.env.JWT_SECRET))
    // model.tasksDB.find().then((tasks) => {
    //     res.send(tasks)
    // }).catch(err => {
    //     console.log(err)
    // })
    const username = jwt.decode(token).username
    console.log(username)
    model.tasksDB.findOne({username: username}).then((data) => {
        console.log(data)
        res.send(data.tasks)
    }).catch(err => {
        console.log(err)
    })

}

exports.addTask = async (req, res) => {

    res.header("Access-Control-Allow-Origin", `/`)
    const token = req.headers['authorization']
    // console.log(token)
    // console.log(jwt.verify(token, process.env.JWT_SECRET))
    if (!req.body) {
        console.log('no body')
    }
    // console.log(req)
    console.log(req.body)
    const newTask = {
        title: req.body.title,
        body: req.body.body,
        done: req.body.done
    }

    console.log('updated: ' + await model.tasksDB.findOneAndUpdate({username: jwt.decode(token).username}, { $push: {tasks: newTask}}))
    res.status(200).send()
    // newTask.save().then(data => {
    //     console.log('success', data)
    //     res.status(200).send({message: 'success'})
    //
    // }).catch(err => {
    //     console.log(err)
    //     res.status(500).send({message: 'fail'})
    //
    // })

}

exports.deleteTask = (req, res) => {
    res.header("Access-Control-Allow-Origin", `/`)
    // console.log(req)
    console.log(req.body)
    // console.log(req.body._id)
    model.tasksDB.findByIdAndDelete(req.body._id).then((data) => {
        console.log(data)
        res.status(200).send({message: 'success'})
    }).catch(err => {
        res.status(500).send({message: 'fail'})
        console.log(err)
    })

}

exports.updateTask = async (req, res) => {
    res.header("Access-Control-Allow-Origin", `/`)

    const data = await model.tasksDB.findByIdAndUpdate(req.body._id)
}