const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')
const model = require("../models/model")
const {getTasks, addTask} = require("../controller/controller")

router.get('/tasks', getTasks)
router.post('/tasks', addTask)


module.exports = router