const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("product_test", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

//Creamos la clase con la cual crearemos la Tabla de la Base de Datos
class Product extends Model {}

//Asignamos los campos de nuestra tabla
Product.init(
  {
    product_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false,
    },
    is_stock: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

module.exports = Product;

/* async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Todo bien, la conexión a la base de datos fue exitosa!");
  } catch (error) {
    console.error("Todo mal", error);
  }
}

testConnection(); */
