const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:5500')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })



const db = mongoose.connection

module.exports = db