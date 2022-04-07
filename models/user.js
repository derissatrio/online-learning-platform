'use strict';
const {
  Model
} = require('sequelize');
const { hashPasword } = require("../helper/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Course);
    }
  }
  User.init(
    {
      email: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Email is Required",
          },
          notNull: {
            msg: "Email cannot be null",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password is Required",
          },
          notNull: {
            msg: "Password cannot be null",
          },
        },
      },
      status: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      hooks: {
        beforeCreate(instance) {
          instance.password = hashPasword(instance.password);
        },
      },
      modelName: "User",
    }
  );
  return User;
};