const express = require('express')
const router = express.Router()
// const controller = require('../controller/controller')
// const model = require("../models/model")
const {getTasks, addTask, deleteTask, updateTask} = require("../controller/taskController")
const {addUser, checkPassword} = require("../controller/userController")


router.get('/api/tasks', getTasks)
router.post('/api/tasks', addTask)
router.delete("/api/tasks", deleteTask)
router.put('/api/tasks', updateTask)

router.post('/api/users', addUser)
router.get('/api/checkPassword', checkPassword)

module.exports = router