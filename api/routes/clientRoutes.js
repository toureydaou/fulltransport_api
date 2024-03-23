const express = require("express");
const {
  getClients,
  getClientbyId,
  getClientbyName,
  registerClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");
const router = express.Router();

router.get("/clients", getClients);
router.get("/client", getClientbyName);
router.get("/client/:id", getClientbyId);
router.post("/client/add", registerClient);
router.put("/client/:id", updateClient);
router.delete("/client/:id", deleteClient);

module.exports = router;
