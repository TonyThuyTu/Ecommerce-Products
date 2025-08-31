const { Product } = require('../models/index.model');

//create product
exports.createProduct = async (req, res) => {
  try {

    const { 

            slug, 
            name_product, 
            price_product, 
            description, 
            status

        } = req.body;

    const img_main = req.file ? req.file.filename : null;

    const newProduct = await Product.create({

            slug,
            name_product,
            price_product,
            description,
            img_main, // save filename
            status
    });

    res.status(201).json({ message: "Product created ✅", product: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create product" });
  }
};