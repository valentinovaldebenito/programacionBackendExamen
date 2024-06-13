const { DataTypes } = require('sequelize');
const sequelize = require('../config/productoDataBase');

const Producto = sequelize.define('Producto', {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tableName: 'productos'
});

module.exports = Producto;