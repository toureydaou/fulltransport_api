const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Ligne = sequelize.define(
  "lignes",
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
    depart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrivee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

module.exports = Ligne;
