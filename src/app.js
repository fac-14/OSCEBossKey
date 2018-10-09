const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 3333);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// all static files (css, etc.)
app.use(express.static(path.join(__dirname, "..", "dist")));

// this serves index.html no matter what the route, so that React routing can take charge of what to display and the server stays out of interval
// if we need active routes (e.g. for database queries), all we'll likely need to do is add those routes above this app.get(), so they'll be hit first
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
