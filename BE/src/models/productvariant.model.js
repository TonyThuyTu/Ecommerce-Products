const { DataTypes } = require('sequelize');
const sequelize = require('..//db/sequelize');

const ProductVariant = sequelize.define('ProductVariant', {
    id_product_variant: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
    },

    id_product: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },

    price: { 
        type: DataTypes.DECIMAL(10,2), 
        allowNull: false 
    },

    price_sale: { 
        type: DataTypes.DECIMAL(10,2) 
    },

    quantity: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },

    img: { 
        type: DataTypes.STRING 
    }
    
}, { 
    tableName: 'product_variant', timestamps: false 
});

module.exports = ProductVariant;
