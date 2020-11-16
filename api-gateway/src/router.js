const express = require('express');
const router = express.Router();
const tripService = require('./tripService');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(tripService);

module.exports = router