const model = require("../models/model");
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