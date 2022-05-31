const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class NewDestination extends Model

NewDestination.init(
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
        modelName: 'NewDestination'
      }
);