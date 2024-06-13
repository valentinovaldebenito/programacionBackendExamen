const express = require("express");
const morgan = require("morgan");
const sequelize = require("../config/productoDataBase");
const Producto = require("../model/producto");
/* const router = require('../router/product.router'); */

const app = express();
const PORT = process.env.PORT || 3003;

app.use(morgan("dev"));
app.use(express.json());

productos_array = [
  {
    nombre: "Papas Fritas",
    precio: 20,
    cantidad: 5,
    categoria: "Consumible",
  },
  {
    nombre: "Manaos",
    precio: 240,
    cantidad: 3,
    categoria: "Bebidas",
  },
  {
    nombre: "Leche",
    precio: 200,
    cantidad: 2,
    categoria: "Bebidas",
  },
];


//Rutas para manejar los productos
app.get("/", async (req, res) => {
  const productos = await Producto.findAll();
  res.json(productos);
  console.log(res);
});

app.post("/productos", async (req, res) => {
  const { 
    nombre = productos_array.nombre,
    precio = productos_array.precio,
    cantidad = productos_array.cantidad,
    categoria = productos_array.categoria 
  } = req.body;
  const producto = await Producto.create({ nombre, precio, cantidad, categoria });
  res.json(producto);
});

app.put("/productos/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, cantidad, categoria } = req.body;
  await Producto.update(
    { nombre, precio, cantidad, categoria },
    {
      where: { id },
    }
  );
  res.json({ success: "Producto actualizado" });
});

//Elimina el producto con el id que le mandamos por la ruta
app.delete("/productos/:id", async (req, res) => {
  const { id } = req.params;
  await Producto.destroy({
    where: { id },
  });
  res.json({ success: "Producto eliminado con exito" });
});

//Sinconizacion del modelo con la base de datos y arranque del servidor
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("No se puedo conectar a la base de datos, detalle del error", error);
  });

module.exports = app;
