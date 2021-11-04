const model = require("../models/model")

exports.getTasks = (req, res) => {
    res.header("Access-Control-Allow-Origin", `/`)

    model.tasksDB.find().then((tasks) => {
        res.send(tasks)
    }).catch(err => {
        console.log(err)
    })

}

exports.addTask = async (req, res) => {

    res.header("Access-Control-Allow-Origin", `/`)
    if (!req.body) {
        console.log('no body')
    }
    // console.log(req)
    console.log(req.body)
    const newTask = new model.tasksDB({
        title: req.body.title,
        body: req.body.body,
        done: req.body.done
    })

    newTask.save().then(data => {
        console.log('success', data)
        res.status(200).send({message: 'success'})

    }).catch(err => {
        console.log(err)
        res.status(500).send({message: 'fail'})

    })

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