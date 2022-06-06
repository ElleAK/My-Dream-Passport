const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class visited extends Model {}

visited.init(
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
      modelName: 'visited'
    }
);

module.exports = visited;