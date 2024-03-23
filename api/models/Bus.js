const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Voyage = require("./Voyage");

const Bus = sequelize.define(
  "bus",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    places: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    plaque: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    etat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { freezeTableName: true, timestamps: true }
);





module.exports = Bus;
