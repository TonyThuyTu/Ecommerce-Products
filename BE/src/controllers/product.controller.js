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

//update product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
            name_product, 
            price_product, 
            description, 
            status, 
            slug 
        } = req.body;

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Update main image if uploaded
    const img_main = req.file ? req.file.filename : product.img_main;

    await product.update({
      name_product,
      price_product,
      description,
      status,
      slug,
      img_main
    });

    res.status(200).json({ message: 'Product updated ✅', product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update product' });
  }
};
