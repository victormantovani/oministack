const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

routes.get("/mantovs", (req, res) => {
    return res.send("Hellow Mantovs1");
})

module.exports = routes;
