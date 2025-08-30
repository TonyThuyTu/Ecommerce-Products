const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

// Import models
const Product = require('./products.model')(sequelize, DataTypes);
const Attribute = require('./attributes.model')(sequelize, DataTypes);
const AttributeValue = require('./attributesvalue.model')(sequelize, DataTypes);
const ProductAttribute = require('./productattributes.model')(sequelize, DataTypes);
const ProductVariant = require('./productvariant.model')(sequelize, DataTypes);
const VariantValue = require('./variantvalue.model')(sequelize, DataTypes);
const SpecTitle = require('./spectitle.model')(sequelize, DataTypes);
const SpecName = require('./specname.model')(sequelize, DataTypes);

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
