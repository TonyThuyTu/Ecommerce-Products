const sequelize = require('../db/sequelize');

// Import models directly (already defined with sequelize.define)
const Product = require('./products.model');
const Attribute = require('./attributes.model');
const AttributeValue = require('./attributesvalue.model');
const ProductAttribute = require('./productattributes.model');
const ProductVariant = require('./productvariant.model');
const VariantValue = require('./variantvalue.model');
const SpecTitle = require('./spectitle.model');
const SpecName = require('./specname.model');

// -------------------- Associations --------------------

// Product ↔ Spec
Product.hasMany(SpecTitle, { foreignKey: 'id_product' });
SpecTitle.belongsTo(Product, { foreignKey: 'id_product' });

SpecTitle.hasMany(SpecName, { foreignKey: 'id_spec' });
SpecName.belongsTo(SpecTitle, { foreignKey: 'id_spec' });

// Product ↔ Variant
Product.hasMany(ProductVariant, { foreignKey: 'id_product' });
ProductVariant.belongsTo(Product, { foreignKey: 'id_product' });

// Variant ↔ AttributeValue
ProductVariant.hasMany(VariantValue, { foreignKey: 'id_product_variant' });
VariantValue.belongsTo(ProductVariant, { foreignKey: 'id_product_variant' });

AttributeValue.hasMany(VariantValue, { foreignKey: 'id_attribute_value' });
VariantValue.belongsTo(AttributeValue, { foreignKey: 'id_attribute_value' });

// Attribute ↔ AttributeValue
Attribute.hasMany(AttributeValue, { foreignKey: 'id_attribute' });
AttributeValue.belongsTo(Attribute, { foreignKey: 'id_attribute' });

// Product ↔ Attribute through ProductAttribute (many-to-many)
Product.belongsToMany(Attribute, { through: ProductAttribute, foreignKey: 'id_product' });
Attribute.belongsToMany(Product, { through: ProductAttribute, foreignKey: 'id_attribute' });

// Export models
module.exports = {
  sequelize,
  Product,
  Attribute,
  AttributeValue,
  ProductAttribute,
  ProductVariant,
  VariantValue,
  SpecTitle,
  SpecName
};
