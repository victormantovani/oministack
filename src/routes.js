const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

const BoxController = require("./blz/BoxController");
const FileController = require("./blz/FileController");

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);
routes.post("/boxes/:id/files",     
    multer(multerConfig).single('file'),
    FileController.store
);

module.exports = routes;
