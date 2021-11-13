const model = require("../models/model")
const jwt = require('jsonwebtoken')

exports.getTasks = (req, res) => {
    res.header("Access-Control-Allow-Origin", `/`)
    const token = req.headers['authorization']

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

    if (await model.tasksDB.findOneAndUpdate({username: jwt.decode(token).username}, {$push: {tasks: newTask}}, {new: true})) {
        res.status(200).send()
    }

}

exports.deleteTask = async (req, res) => {
    res.header("Access-Control-Allow-Origin", `/`)
    console.log(req.body)

    const token = req.headers['authorization']

    if (await model.tasksDB.findOneAndUpdate({username: jwt.decode(token).username}, {$pull: {tasks: {_id: req.body._id}}})) {
        res.status(200).send()
    }
}

exports.updateTask = async (req, res) => {
    res.header("Access-Control-Allow-Origin", `/`)
    const token = req.headers['authorization']

    if (await model.tasksDB.findOneAndUpdate({username: jwt.decode(token).username}, {$set: {tasks: {_id: req.body._id}}})) {
        res.status(200).send()
    }
    model.tasksDB.update()


}