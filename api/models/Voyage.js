const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Bus = require("./Bus");
const Ligne = require("./Ligne");

const Voyage = sequelize.define(
  "voyage",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    heure_depart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

Voyage.belongsTo(Bus);
Bus.hasMany(Voyage);

Voyage.belongsTo(Ligne);
Ligne.hasMany(Voyage);

module.exports = Voyage;
