const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 3333);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "dist")));

module.exports = app;
