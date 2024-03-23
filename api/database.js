const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_TYPE,
  DATABASE_USER,
} = require("./config");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: DATABASE_TYPE,
    port: DATABASE_PORT,
  }
);

module.exports = sequelize;
