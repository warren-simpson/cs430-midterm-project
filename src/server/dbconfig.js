const Sequelize = require("sequelize");
const db = new Sequelize("root", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: "mysql2",
  define: { timestamps: false },
});

module.exports = db;
