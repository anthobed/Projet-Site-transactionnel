const HTTP_PORT = 3000;

const express = require("express");
const app = express();
exports.app = app;
const path = require("path");
const fs = require("fs");
const router = require("./routes");
const db = require("./database/index");
const multer = require("multer");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "pug");

app.use(router);
require("./middlewares/errors.middleware");

db.connect(() => {
  app.listen(HTTP_PORT, () => {
    console.log(`Serveur NodeJS démarré sur http://localhost:${HTTP_PORT}`);
  });
});
