const { API_PORT } = require("./config");
const express = require("express");

// routes
const clientRoutes = require("./routes/clientRoutes");

const app = express();
app.use(express.json());

app.use("/api", clientRoutes);

app.use((req, res) => {
  res.status(404).json("404 error ressource not available !");
});

app.listen(API_PORT, () => {
  console.log(`Server successfully started on port: ${API_PORT}`);
});
