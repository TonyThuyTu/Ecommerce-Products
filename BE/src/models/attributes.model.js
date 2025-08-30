const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Attribute = sequelize.define('Attribute', {
  id_attributes: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  tableName: 'attributes',
  timestamps: false
});

module.exports = Attribute;
