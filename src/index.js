const app = require("./app/app");

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})