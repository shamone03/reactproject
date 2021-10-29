const mongoose = require('mongoose')

const reactDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://shamone:huWzzjo5Cug4P96l@cluster0.rdj2r.mongodb.net/reactdatabase?retryWrites=true&w=majority')
        console.log('connected to db')
    } catch (e) {
        console.error(e)

    }
}

module.exports = reactDB

