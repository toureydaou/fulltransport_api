const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Paiement = sequelize.define(
  "paiement",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    motif: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    montant: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

module.exports = Paiement;
