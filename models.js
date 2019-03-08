const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'cars_lab_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Car = sequelize.define('car', {
  model: Sequelize.STRING,
  make: Sequelize.STRING,
  is_new: Sequelize.BOOLEAN
});

module.exports = {
  sequelize,
  Car,
};
