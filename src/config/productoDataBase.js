const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('productosdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;