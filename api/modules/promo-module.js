const express = require('express');
const router = express.Router();
const Promo = require('../models/promo-model');

//Lấy 1 cái Promo
router.get('/:id', (req, res) => {
    Promo.findById(req.params.id, (err, Promo) => {
        if (err) {
            res.status(400).json({ msg: `something gone wrong: ${err}` })
        }
        // console.log(req.params.id);
        res.json(Promo);
    }).catch(err => res.status(400).json({ msg: `something gone wrong: ${err}` }))
})

//lấy hết Promo
router.get('/', (req, res) => {
    Promo.find({}, (err, data) => {
        if (err || data.isDeleted) {
            res.status(400).json({ msg: `something gone wrong: ${err}` })
        }
        res.json(data);
    })
        .catch(err => res.status(400).json({ msg: `something gone wrong: ${err}` }))
})
//update
router.put('/update/:id', (req, res) => {
    Promo.findById(req.params.id, (req, promo) => {
        if (req.body.promoName !== undefined) {
            promo.promoName = req.body.promoName
        }

        if (req.body.desPromo !== undefined) {
            promo.desPromo = req.body.desPromo
        }
        promo.save().then(promos => {
            res.json('object updated successfully: ' + promos);
        }).catch(err => {
            res.status(400).send("unable to update data: " + err);
        })

    })
})
module.exports = router;