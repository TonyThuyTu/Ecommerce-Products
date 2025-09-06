const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const SpecName = sequelize.define('SpecName', {
  id_spec_name: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
},

  id_spec: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},

  spec_value: { 
    type: DataTypes.STRING 
},

  spec_name: { 
    type: DataTypes.STRING 
}
}, { 
    tableName: 'spec_name', 
    timestamps: false 
});

module.exports = SpecName;
