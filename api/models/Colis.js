const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Client = require("./Client");
const Vendeur = require("./Vendeur");

const Colis = sequelize.define(
  "colis",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    contenu: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expediteur: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expediteur_contact: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    destinataire: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    destinataire_contact: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

// Association between Colis and Seller

Colis.belongsTo(Vendeur);
Vendeur.hasMany(Colis);

// Association between Colis and CLient

Colis.belongsTo(Client);
Client.hasMany(Colis);

// Association between Colis and Paiement

Colis.hasOne(Paiement);
Paiement.belongsTo(Colis);

// Association between Colis and Travel

Colis.belongsTo(Voyage);
Voyage.hasMany(Colis);

module.exports = Ticket;
