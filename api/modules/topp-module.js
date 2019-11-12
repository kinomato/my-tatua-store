const express = require('express');
const router = express.Router();


const Topping = require('../models/topping-model');
// const User = mongoose.Schema("User")
// @route POST api/users/register
// @descr dang ky
// @access public
// lấy tổng số document user
router.get("/", (req, res) => {
    Topping.find({}, (err, data) => {
        if (err)
            return res.status(400).json({ msg: `lỗi ${err}` });
        res.json(data);
    })
})

//Lấy 1 cái Topping
router.get('/:id', (req, res) => {
    Topping.findById(req.params.id, (err, topping) => {
        if (err) {
            res.status(400).json({ msg: `something gone wrong: ${err}` })
        }
        // console.log(req.params.id);
        res.json(topping);
    }).catch(err => res.status(400).json({ msg: `something gone wrong: ${err}` }))
})

//Edit topping
router.put('/update/:id', (req, res) => {
    Topping.findById(req.params.id, (err, topping) => {
        if ((req.body.toppName !== undefined) && (req.body.toppPrize !== undefined)) {
            topping.toppName = req.body.toppName
            topping.toppPrize = req.body.toppPrize
        }
        // if (req.body.toppPrize !== undefined) {
        //     topping.toppPrize = req.body.toppPrize
        // }
        topping.save().then(topping=>{
            res.json('object updated successfully: ' + topping);
        }).catch(err=>{
            res.status(400).send("unable to update data: " + err);
        });
    })
})


module.exports = router;