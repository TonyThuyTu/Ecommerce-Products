const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const upload = require('../middileware/uploads');

//create
router.post('/',upload.array('images', 5), ProductController.createProduct);

module.exports = router;