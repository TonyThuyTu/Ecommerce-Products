const slugify = require('slugify');
const { Product } = require('../models/index.model');

const generateSlug = async (req, res, next) => {
    
  if (!req.body.name_product) return next();

  let baseSlug = slugify(req.body.name_product, {
    lower: true,
    strict: true,
    locale: "vi",
  });

  let slug = baseSlug;
  let counter = 1;

  // Check for uniqueness in DB
  while (await Product.findOne({ where: { slug } })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  req.body.slug = slug;
  next();

};

module.exports = generateSlug;