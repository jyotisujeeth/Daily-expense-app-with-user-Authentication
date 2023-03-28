const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'mysel&me', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;