const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Client = require("./Client");
const Vendeur = require("./Vendeur");
const Arret = require("./Arret");
const Voyage = require("./Voyage");
const Paiement = require("./Paiement");

const Ticket = sequelize.define(
  "tickets",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    nbre_places: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_vente: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    methode_paiement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

// Association between Client and Ticket
Ticket.belongsTo(Client);
Client.hasMany(Ticket);

// Association between Ticket and Seller

Ticket.belongsTo(Vendeur);
Vendeur.hasMany(Ticket);

// Association between Ticket and Stop

Ticket.belongsTo(Arret);
Arret.hasMany(Ticket);

// Association between Ticket and Travel

Ticket.belongsTo(Voyage);
Voyage.hasMany(Ticket);

// Association between Ticket and Paiement

Ticket.hasOne(Paiement);
Paiement.belongsTo(Ticket);

module.exports = Ticket;
