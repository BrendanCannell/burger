let mysql = require("promise-mysql");

module.exports = async () =>
  mysql.createConnection(process.env.JAWSDB_URL || {
    database: "burger_db",
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS
  });