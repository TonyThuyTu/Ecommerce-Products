const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const upload = require('../middileware/uploads');
const generateSlug = require('../middileware/slugGenerate');

    //create
    router.post(
        '/', 
        upload.single('img_main'), 
        generateSlug, 
        ProductController.createProduct
    );

    //update
    router.put(
        '/:id',
        upload.single('img_main'),
        generateSlug,
        ProductController.updateProduct
    );

    //get detail by id
    router.get(
      '/:id',
      ProductController.getProductById  
    );

    //get all products
    router.get(
        '/',
        ProductController.getAllProducts
    );

module.exports = router;