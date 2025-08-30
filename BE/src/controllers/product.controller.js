const db = require('../models/index.model');

//create product
exports.createProduct = async (req, res) => {

    try {

        //basic info 
        const { 
            slug, 
            name_product, 
            price_product, 
            description, 
            img_main, 
            status 
        } = req.body;

        const newProduct = await db.create({
            slug,
            name_product,
            price_product,
            description,
            img_main,
            status
        });

        res.status(201).json({ message: 'Product created ✅', product: newProduct });
    } catch (err) {

        console.error(err);
        res.status(500).json({ error: 'Failed to create product' });

    }

};