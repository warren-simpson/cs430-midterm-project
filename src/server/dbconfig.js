const Sequelize = require("sequelize");
const db = new Sequelize("root", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: { timestamps: false },
});

module.exports = db;
