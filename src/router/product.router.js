const router = require("express").Router();
const { faker } = require("@faker-js/faker");

const Products = require("../model/product.model");

//Ruta para obtener todos los productos
router.get("/products", async (req, res) => {
  const products = await Products.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: products,
  });
});

//Ruta para obtener un producto en particular mediante un filtrado
router.get("/products/:product_id", async (req, res) => {
  const id = req.params.product_id;
  const product = await Products.findOne({
    where: {
      product_id: id,
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: product,
  });
});

//Ruta para cargar un producto
router.post("/products", async (req, res) => {
  const dataProducts = req.body;
  //Esperamos a que sincronice
  await Products.sync();
  //Creamos un producto con datos aleatorios que generamos con Faker
  const createProduct = await Products.create({
    product_name: dataProducts.product_name,
    price: dataProducts.price,
    is_stock: dataProducts.is_stock,
  });

  res.status(201).json({
    ok: true,
    status: 201,
    message: "Producto Creado",
  });
});

//Ruta para actualizar un producto
router.put("/products/:product_id", async (req, res) => {
  const id = req.params.product_id;
  const dataProducts = req.body;
  const updatedProduct = await Products.update(
    {
      product_name: dataProducts.product_name,
      price: dataProducts.price,
      is_stock: dataProducts.is_stock,
    },
    {
      where: {
        product_id: id,
      },
    }
  );

  res.status(200).json({
    ok: true,
    status: 201,
    message: "Producto Actualizado",
    body: updatedProduct,
  });
});

//Ruta para eliminar un producto
router.delete("/products/:product_id", async (req, res) => {
  const id = req.params.product_id;
  const deleteProduct = await Products.destroy({
    where: {
      product_id: id,
    },
  });
  res.status(204).json({
    ok: true,
    status: 204,
    body: deleteProduct
  });
});

module.exports = router;
