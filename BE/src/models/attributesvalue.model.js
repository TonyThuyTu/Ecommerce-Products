const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const AttributeValue = sequelize.define('AttributeValue', {
  id_attributes_value: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
},

  id_attribute: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},

  value: { 
    type: DataTypes.STRING, 
    allowNull: false 
},

  value_note: { 
    type: DataTypes.TEXT 
}

}, { 
    tableName: 'attributes_value', 
    timestamps: false 
});

module.exports = AttributeValue;
