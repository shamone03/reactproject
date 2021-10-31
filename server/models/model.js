const mongoose = require('mongoose')

const task = new mongoose.Schema(
    {
        title: {type: String, required: true},
        body: {type: String},
        done: {type: Boolean}
    }, {collection: 'taskscollection'}
)

const tasksDB = mongoose.model('tasksDB', task)

exports.tasksDB = tasksDB
