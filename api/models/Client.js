const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Client = sequelize.define(
  "Client",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

module.exports = Client;
