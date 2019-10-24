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
    userEmail:{
        type:String,
        require:true
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
    },
    orders:[
        {
            type:schema.Types.ObjectId,
            ref:'order'
        }
    ]
})

const User = mongoose.model('User', User, 'user')
module.exports = User