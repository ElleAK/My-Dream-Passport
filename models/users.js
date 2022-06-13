const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection').default;
const bcrypt = require('bcrypt');

// create User Model
class users extends Model {
    //method to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
    }

// Columns for User model
    users.init(
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            username: {
              type: DataTypes.STRING,
              allowNull: false
            },
            email: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
              validate: {
                isEmail: true
              }
            },
            password: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                len: [7]
              }
            }
          },
          {
            hooks: {
              // beforeCreate "hook" functionality
              async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
              },
        
              async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
              }
            },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'users'
          }
        );
        
        module.exports = users;
        