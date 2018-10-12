const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const database = require("./database");

const app = express();
app.set("port", process.env.PORT || 3333);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// all static files (css, etc.)
app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/database-test", (req, res) => {
  database("History_Stations")
    .select({
      view: "Grid view"
    })
    .firstPage((err, records) => {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(record => {
        console.log("Retrieved", record.get("station_name"));
      });
      res.status(200);
      res.send("<h1>hi</h1>");
    });
});

app.get("/api/history", (req, res) => {
  database("History_Stations")
    .select({ view: "Grid view" })
    .firstPage((err, records) => {
      if (err) {
        throw new Error(err);
      }
      const stations = [];
      records.forEach(record => {
        stations.push(record.get("station_name"));
      });
      res.set("Content-Type", "application/json");
      const stationJson = JSON.stringify({ payload: [...stations] });
      res.send(stationJson);
    });
});

// this serves index.html no matter what the route, so that React routing can take charge of what to display and the server stays out of interval
// if we need active routes (e.g. for database queries), all we'll likely need to do is add those routes above this app.get(), so they'll be hit first
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
