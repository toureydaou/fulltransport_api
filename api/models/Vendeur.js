const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Vendeur = sequelize.define(
  "Vendeur",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

module.exports = Vendeur;
