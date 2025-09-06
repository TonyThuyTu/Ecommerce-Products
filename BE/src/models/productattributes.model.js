const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const ProductAttribute = sequelize.define('ProductAttribute', {
    
    id_product_attribute: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },

    id_product: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },

    id_attribute: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    }

}, { 
    tableName: 'product_attribute', 
    timestamps: false 
});

module.exports = ProductAttribute;
