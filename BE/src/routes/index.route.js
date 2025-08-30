const express = require('express');
const router = express.Router();

const ProductRoute = require('./product.route');

router.use('/product', ProductRoute);

module.exports = router;