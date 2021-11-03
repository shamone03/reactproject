const express = require('express')
const router = express.Router()
// const controller = require('../controller/controller')
// const model = require("../models/model")
const {getTasks, addTask, deleteTask, updateTask} = require("../controller/controller")

router.get('/api/tasks', getTasks)
router.post('/api/tasks', addTask)
router.delete("/api/tasks", deleteTask)
router.put('/api/tasks', updateTask)
// router.get('/register', (req, res) => {
//     res.send({message:'hello'})
// })

module.exports = router