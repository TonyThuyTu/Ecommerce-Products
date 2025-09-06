const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const VariantValue = sequelize.define('VariantValue', {
    
    id_variant_value: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },

    id_product_variant: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },

    id_attribute_value: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    }

}, { 
    tableName: 'variant_value', 
    timestamps: false 
});

module.exports = VariantValue;
