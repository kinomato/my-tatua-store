const mongoose = require('mongoose');
const schema = mongoose.Schema;

const OrderSchema = new schema({
    _id: { type: String },
    userId: {
        type: schema.Types.ObjectId,
        ref: 'user'
    },
    deliveryDate: {
        type: Date,
        
    },
    recievedDate: {
        type: Date,
        
    },
    items: [
        {
            id:{type:String},
            sl:{type:Number},
            tongtien:{type:Number},
            product: {
                type: Object
            },
            topps: {
               type:Array
            },
        }
        
    ],
    prizeOrigin:{
        type:String,
        require:true
    },
    prizeWithPromo:{
        type:String,
        require:true
    },
    create_time: {type:Date},
    orderID: {type:String}
})

const Order = mongoose.model('Order', OrderSchema, 'order');
module.exports = Order;