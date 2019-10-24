const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Promo= new Schema({
    
    promo:  {
        type: String,
        require: true
    },
    desPromo:  {
        type: String,
        require: true
    },
    // donHangs: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'order'
    //     }
    // ],
    isDeleted:  {
        type: String,
        require: true,
        default: false
    },
})
const Promo = mongoose.model('Promo',Promo,'promo');
module.exports = Promo;