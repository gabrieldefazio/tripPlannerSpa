var Sequelize = require("sequelize");

var db = new Sequelize( process.env.DATABASE_URL || "postgres://localhost:5432/tripplanner", {
  logging: false
});

module.exports = db;
