const express = require('express');
const router = express.Router();
const config = require('config');
const mongoose=require('mongoose');
const Order =require('../models/order-model');

router.get('/listOrder',(err,data)=>{
    
})

router.post('/saveorder',(req,res) => {
    const _id = mongoose.Types.ObjectId();
    const { userId,items,create_time,prizeOrigin,prizeWithPromo} = req.body;
    if( !userId || !items|| !create_time||!prizeOrigin||!prizeWithPromo){
        res.status(400).json({msg:"missing data"});
    }
    const newOrderData = new Order ({
        _id,
        userId,
        items,
        prizeOrigin,
        prizeWithPromo,
        create_time
    })
    newOrderData.save()
    .then(order => {
        res.status(200).json({msg:"success",id:order.id})
    })
    .catch(reason => {
        res.status(400).json(reason);
    })
})
module.exports = router;