const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')
const model = require("../models/model");
const {getTasks} = require("../controller/controller");

router.get('/tasks', getTasks)


module.exports = router