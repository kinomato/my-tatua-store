const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Topping = schema({
    _id:{type:String},
    toppName:{
        type:String,
        require:true
    },
    toppAmount:{
        type:Number,
        require:true
    },
    toppPrize:{
        type:String,
        require:true
    }
})