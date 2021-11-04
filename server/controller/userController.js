const model = require('../models/model')
const bcrypt = require('bcrypt')
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

