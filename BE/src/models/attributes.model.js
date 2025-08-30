const { Datatypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize');

const Attribute = sequelize.define('Attribute', {
    id_attributes: {
        type: Datatypes.INTERGER,
        primaryKey: true,
        autoPrimary: true
    },

    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    type: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    }
}, {
    tableName: 'attributes', timestamps: false
});

module.exports = Attribute;