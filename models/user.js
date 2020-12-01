const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Field name is necessary']
    },
    lastName: {
        type: String,
        required: [true, 'Field lastname is necessary']
    }, 
    role: {
        type: String, 
        default: 'USER_ROLE'
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'Field email is necessary']
    },
    password: {
        type: String,
        required: [true, 'Field password is necessary']
    }
})

module.exports = mongoose.model('user', userSchema)