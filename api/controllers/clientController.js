const { Op } = require("sequelize");
const Client = require("../models/Client");

const getClients = async (req, res) => {
  try {
    await Client.findAll()
      .then((response) => {
        return res.status(200).json({ data: response });
      })
      .catch((error) =>
        res.status(500).json({ error: "Une erreur est survenue" })
      );
  } catch (error) {
    console.log(error);
  }
};

const getClientbyId = async (req, res) => {
  try {
    await Client.findByPk(atob(req.params.id))
      .then((response) => {
        if (response === null) {
          return res.status(404).json({ data: response });
        }
        return res.status(200).json({ data: response });
      })
      .catch((error) =>
        res.status(500).json({ error: "Une erreur est survenue" })
      );
  } catch (error) {
    console.log(error);
  }
};

const getClientbyName = async (req, res) => {
  try {
    await Client.findAll({
      where: {
        [Op.or]: {
          nom: {
            [Op.like]: req.query.nom ? `%${req.query.nom}%` : "%%",
          },
          prenom: {
            [Op.like]: req.query.prenom ? `%${req.query.prenom}%` : "%%",
          },
          contact: {
            [Op.like]: req.query.contact ? `%${req.query.contact}%` : "%%",
          },
        },
      },
    })
      .then((response) => {
        if (response === null) {
          return res.status(404).json({ data: response });
        }
        return res.status(200).json({ data: response });
      })
      .catch((error) =>
        res.status(500).json({ error: "Une erreur est survenue" })
      );
  } catch (error) {
    res.status(500).json({ error: "Une erreur est survenue" });
  }
};

const registerClient = async (req, res) => {
  try {
    await Client.create(req.body)
      .then(() => {
        return res.status(201).json({ message: "Client enregistré" });
      })
      .catch((error) => {
        return res.status(500).json({ error: "Une erreur est survenue" });
      });
  } catch (error) {
    return res.status(500).json({ error: "Une erreur est survenue" });
  }
};

const updateClient = async (req, res) => {
  try {
    await Client.findByPk(atob(req.params.id)).then((response) => {
      if (response === null) {
        return res.status(404).json({ message: "Client inexistant" });
      }
      Client.update(req.body, { where: { id: atob(req.params.id) } })
        .then(() => res.status(201).json({ message: "Client mis à jour" }))
        .catch((error) =>
          res.status(500).json({ error: "Une erreur est survenue" })
        );
    });
  } catch (error) {
    return res.status(500).json({ error: "Une erreur est survenue" });
  }
};

const deleteClient = async (req, res) => {
  try {
    await Client.findByPk(atob(req.params.id)).then((response) => {
      if (response === null) {
        return res.status(404).json({ message: "Client inexistant" });
      }
      Client.destroy({ where: { id: atob(req.params.id) } })
        .then(() => res.status(201).json({ message: "Client supprimé" }))
        .catch((error) =>
          res.status(500).json({ error: "Une erreur est survenue" })
        );
    });
  } catch (error) {
    return res.status(500).json({ error: "Une erreur est survenue" });
  }
};

module.exports = {
  getClients,
  getClientbyId,
  getClientbyName,
  registerClient,
  updateClient,
  deleteClient,
};
