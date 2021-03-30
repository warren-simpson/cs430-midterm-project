module.exports = (sequelize, Sequelize) => {
  const Customers = sequelize.define("customers", {
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

  return Customers;
};
