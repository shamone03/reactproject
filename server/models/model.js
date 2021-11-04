const mongoose = require('mongoose')

const task = new mongoose.Schema(
    {
        title: {type: String, required: true},
        body: {type: String},
        done: {type: Boolean}
    }, {collection: 'taskscollection'}
)

const user = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true}
    }, {collection: 'usercollection'}
)

const tasksDB = mongoose.model('tasksDB', task)
const userDB = mongoose.model('userDB', user)

exports.tasksDB = tasksDB
exports.userDB = userDB
