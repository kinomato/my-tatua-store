const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ToppingSchema = schema({
    _id:{type:String},
    toppName:{
        type:String,
        require:true
    },
    toppPrize:{
        type:String,
        require:true
    }
})
const Topping = mongoose.model('Topping',ToppingSchema,'topping');
module.exports = Topping;