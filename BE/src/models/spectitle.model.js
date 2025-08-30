const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const SpecTitle = sequelize.define('SpecTitle', {

    id_spec: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },

    id_product: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },

    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }

}, { 
    tableName: 'spec_title', 
    timestamps: false 
});

module.exports = SpecTitle;
