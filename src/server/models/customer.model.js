const Sequelize = require("sequelize");
const db = require("../dbconfig");

const Customers = db.define("customers", {
  customer_id: {
    type: Sequelize.INTEGER,
  },
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  home_city: {
    type: Sequelize.STRING,
  },
});

module.exports = Customers
