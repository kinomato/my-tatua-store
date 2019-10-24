const mongoose = require('mongoose');
const schema = mongoose.Schema;

const User = schema({
    _id: {
        type: String
    },
    userName: {
        type: String,
        require: true
    },
    userAdress: {
        type: String,
        require: true
    },
    userGenre: {
        type: String,
        require: true
    },
    userPhone: {
        type: String,
        require: true
    },
    userBirthDay: {
        type: Date,
        require: true
    },
    userPassword: {
        type: String,
        require: true
    },
    priority: {
        type: Number,
        require: true
    }
})

const User = mongoose.model('User', User, 'user')
module.exports = User