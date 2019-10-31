const express = require('express');
const router = express.Router();
const config = require('config');
const mongoose = require('mongoose');
const Product = require('../models/product-model');

router.get('/', (req, res) => {
    Product.find({}, (err, data) => {
        if (err || data.isDeleted) {
            res.status(400).json({ msg: `something gone wrong: ${err}` })
        }
        res.json(data);
    })
        .catch(err => res.status(400).json({ msg: `something gone wrong: ${err}` }))
})

module.exports = router;