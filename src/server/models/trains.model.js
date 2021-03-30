const Sequelize = require("sequelize");
const db = require("../dbconfig");

const Trains = db.define("trains", {
  train_id: {
    type: Sequelize.INTEGER,
  },
  departure_city: {
    type: Sequelize.STRING,
  },
  arrival_city: {
    type: Sequelize.STRING,
  },
});

module.exports = Trains
