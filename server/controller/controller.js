const { response } = require("express")

const model = require("../models/model")

exports.getTasks = (req, res) => {
    res.header("Access-Control-Allow-Origin", `/`)

    model.tasksDB.find().then((tasks) => {
        res.send(tasks)
    }).catch(err => {
        console.log(err)
    })
    // JSON.stringify(tasksList)
    // console.log('server', tasksList)
    //
    // res.send(tasksList.map((task) => {
    //     return JSON.stringify(task)
    // }).join(''))
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
        res.status(200).send({message:'success'})

    }).catch(err => {
        console.log(err)
        res.status(500).send({message:'fail'})

    })
    
}

exports.deleteTask = (request, res) => {
    res.header("Access-Control-Allow-Origin", `/`)
    // console.log(req)
    console.log(request.body)
    // console.log(req.body._id)
    model.tasksDB.findByIdAndDelete(request.body._id).then((data) => {
        console.log(data)
        res.status(200).send({message:'success'})
    }).catch(err => console.log(err))

}