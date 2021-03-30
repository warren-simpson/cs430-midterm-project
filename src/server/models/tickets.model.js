module.exports = (sequelize, Sequelize) => {
  const Tickets = sequelize.define("tickets", {
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

  return Tickets;
};
