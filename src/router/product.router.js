const router = require('express').Router();

router.get("/products", (res, req) => {
    res.send("I am a Router");
});

module.exports.router;