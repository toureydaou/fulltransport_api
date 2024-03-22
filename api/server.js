const { API_PORT } = require("./config");

const express = require("express");

const app = express();
app.use(express.json());

app.listen(API_PORT, () => {
  console.log(`Server successfully started on port: ${API_PORT}`);
});
