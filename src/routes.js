const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

// const  routes = express.Router();

const BoxController = require("./mantovs/BoxController");
// const FileController = require("./controllers/FileController");

routes.get("/mantovs", (req, res) => {
    return res.send("Hellow Mantovs1");
})

module.exports = routes;
