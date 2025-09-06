const slugify = require('slugify');
const { Product } = require('../models/index.model');
const { Op } = require('sequelize');

const generateSlug = async (req, res, next) => {
  if (!req.body.name_product) return next();

  const productId = req.params.id; // if updating, get product id
  let baseSlug = slugify(req.body.name_product, {
    lower: true,
    strict: true,
    locale: "vi",
  });

  let slug = baseSlug;
  let counter = 1;

  // Check for uniqueness, ignore current product if updating
  while (await Product.findOne({ 
    where: { 
      slug, 
      ...(productId && { id_product: { [Op.ne]: productId } }) 
    } 
  })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  req.body.slug = slug;
  next();
};

module.exports = generateSlug;
