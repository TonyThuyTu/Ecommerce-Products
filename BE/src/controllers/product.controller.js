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

//get detail
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product fetched ✅', product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

//get all
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["id_product", "name_product", "price_product", "img_main", "slug", "status"],
  });

    // Map to frontend format if needed
    const formatted = products.map((p) => ({
      id: p.id_product,
      name: p.name_product,
      product_price: p.price_product,
      img_main: `http://localhost:5000/uploads/products/${p.img_main}`,
      slug: p.slug,
      status: p.status
    }));

    return res.json(formatted); // ✅ send response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" }); // ✅ handle errors
  }
};
