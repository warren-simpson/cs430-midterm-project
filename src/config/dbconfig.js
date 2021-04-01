const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "trains",
  connectionLimit: 10,
});

module.exports = pool;
