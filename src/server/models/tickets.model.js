const Sequelize = require("sequelize");
const db = require("../dbconfig");

const Tickets = db.define("tickets", {
  ticket_id: {
    type: Sequelize.INTEGER,
  },
  customer_id: {
    type: Sequelize.INTEGER,
  },
  train_id: {
    type: Sequelize.INTEGER,
  },
  purchase_date: {
    type: Sequelize.DATE,
  },
});


module.exports = Tickets