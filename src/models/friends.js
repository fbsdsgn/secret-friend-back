const connection = require("../config/database");

const { DataTypes } = require("sequelize");

const Friend = connection.define(
  "Friend",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo deve ser preenchido"
        },
        len: {
          args: [3, 30],
          msg: "Esse deve ter entre 3 a 30 caracteres"
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Esse campo precisa ser um email válido"
        },
      }
    },
  },
  { timestamps: false }
);

module.exports = Friend;