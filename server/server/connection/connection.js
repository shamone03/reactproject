const mongoose = require('mongoose')

const reactDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.URI)
        console.log('connected to db')
    } catch (e) {
        console.error(e)

    }
}

module.exports = reactDB

