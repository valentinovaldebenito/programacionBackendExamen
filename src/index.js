const app = require("./app/app");

const port = process.env.port || 3002;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});