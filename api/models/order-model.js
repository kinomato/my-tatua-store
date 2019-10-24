const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Order = new schema({
    _id: { type: String },
    user: {
        type: schema.Types.ObjectId,
        ref: 'user'
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    recievedDate: {
        type: Date,
        required: true
    },
    product: {
        type: schema.Types.ObjectId,
        ref: 'product'
    }

})

const Order = mongoose.model('Order', Order, 'order');
module.exports = Order;