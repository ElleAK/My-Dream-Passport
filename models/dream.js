const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//create newDestination model
class newDestination extends Model {}


//Columns for model
newDestination.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      season: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'newDestination'
    }
);

module.exports = newDestination