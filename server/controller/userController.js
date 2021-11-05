const model = require('../models/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.addUser = async (req, res) => {
    if (!req.body) {
        res.status(500).send({message: 'no body'})
    }

    const newUser = model.userDB({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10)
    })

    newUser.save().then((data) => {
        res.status(200).send({message: 'success'})
        console.log(data)
    }).catch(err => res.status(500).send(err))

}

exports.checkPassword = async (req, res) => {
    if (!req.body) {
        res.status(500).send({message: 'no body'})
    }

    const user = await model.userDB.findOne({username: req.body.username})
    console.log('user: ', user)
    if (!user) {
        console.log('no user')
        res.status(500).send({message: 'no user'})
    } else {
        if (await bcrypt.compare(req.body.password, user.password)) {
            console.log('password correct')
            const token = jwt.sign({username: user.username, _id: user._id}, process.env.JWT_SECRET)
            res.status(200).send({message: 'success', token: token})
        } else {
            console.log('password incorrect')
            res.status(500).send({message: 'password incorrect'})
        }
    }

}