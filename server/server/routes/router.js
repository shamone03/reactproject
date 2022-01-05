const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
// const controller = require('../controller/controller')
// const model = require("../models/model")
const {getTasks, addTask, deleteTask, updateTask} = require("../controller/taskController")
const {addUser, loginUser, verifyUser} = require("../controller/userController")

const verifyToken = (req, res, next) => {
    res.set('Acces-Control-Allow-Origin', '*')
    console.log(req.headers)
    console.log('token: ' + req.headers['authorization'])
    if (!req.headers['authorization']) {
        res.send({message: 'no token found'})
        return
    }
    try {
        jwt.verify(req.headers['authorization'], process.env.JWT_SECRET)
        next()
    } catch (err) {
        console.log(err)
        res.send({message: 'invalid token'})
    }
}
router.get('/api/tasks', verifyToken)
router.get('/api/tasks', getTasks)

router.put('/api/tasks/add', verifyToken)
router.put('/api/tasks/add', addTask)

router.delete('/api/tasks', verifyToken)
router.delete("/api/tasks", deleteTask)

router.put('/api/tasks', updateTask)

router.get('/api/verify', verifyUser)
router.post('/api/users', addUser)
router.post('/api/login', loginUser)

module.exports = router