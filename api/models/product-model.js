const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Product = schema({
    _id: { type: String },
    prodName: {
        type: String,
        require: true
    },
    toppStatus: {
        type: Boolean,
        defaut: false
    },
    topp: {
        type: schema.Types.ObjectId,
        ref: 'topping'
    },
    prodPrize: {
        type: String,
        require: true
    }
})

const Product = mongoose.model('Product', Product, 'product')
module.exports = Product