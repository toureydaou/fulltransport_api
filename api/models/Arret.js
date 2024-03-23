const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Ligne = require("./Ligne");

const Arret = sequelize.define(
  "arret",
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
    prix: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

Arret.belongsTo(Ligne);
Ligne.hasMany(Arret);

module.exports = Arret;
