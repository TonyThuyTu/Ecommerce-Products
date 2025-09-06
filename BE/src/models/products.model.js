const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Product = sequelize.define('Product', {
    id_product: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    slug: { 
        type: DataTypes.TEXT 
    },
    name_product: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    price_product: { 
        type: DataTypes.DECIMAL(10,2), 
        allowNull: false 
    },
    description: { 
        type: DataTypes.TEXT 
    },
    img_main: { 
        type: DataTypes.STRING,
        allowNull: true
    },
    status: { 
        type: DataTypes.INTEGER, 
        defaultValue: 1 
    },
    created_at: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    }
}, { 
    tableName: 'Products', 
    timestamps: false 
});

module.exports = Product;
