module.exports = (sequelize, Sequelize) => {
  const Trains = sequelize.define("trains", {
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

  return Trains;
};
