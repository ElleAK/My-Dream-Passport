const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class newDestination extends Model {}

newDestination.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      location: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      dateOfDeparture: {
        type: DataTypes.DATE,
        allowNull: false
      },
      returnDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      wouldTravelAgain: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      transportation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tripComment: {
        type: DataTypes.STRING,
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