const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  API_PORT: process.env.API_PORT,
  API_KEY: process.env.API_KEY,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_TYPE: process.env.DATABASE_TYPE,
};
