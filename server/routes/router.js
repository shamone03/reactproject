const express = require('express')
const router = express.Router()
// const controller = require('../controller/controller')
// const model = require("../models/model")
const {getTasks, addTask, deleteTask, updateTask} = require("../controller/controller")

router.get('/tasks', getTasks)
router.post('/tasks', addTask)
router.delete("/tasks", deleteTask)
router.put('/tasks', updateTask)

module.exports = router