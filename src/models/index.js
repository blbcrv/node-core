const Sequelize = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données OK.');
  })
  .catch(err => {
    console.error('Impossible de se connecter à la base de donées:', err);
  });

module.exports = { sequelize };

