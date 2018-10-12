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
      res.status(200);
      res.send("<h1>hi</h1>");
    });
});

app.get("/api/history", (req, res) => {
  database("History_Stations")
    .select({ view: "Grid view" })
    .firstPage((err, records) => {
      if (err) {
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify({ payload: [] }));
        // throw new Error(err);
      } else {
        const stations = [];
        records.forEach(record => {
          stations.push(record.get("station_name"));
        });
        res.set("Content-Type", "application/json");
        const stationJson = JSON.stringify({ payload: [...stations] });
        res.send(stationJson);
      }
    });
});

app.get("/api/history/:station", (req, res) => {
  database("History_Stations")
    .select({
      view: "Grid view",
      filterByFormula: `({station_name} = '${req.params.station}')`,
      fields: ["primary_key"]
    })
    .firstPage((err, records) => {
      if (err) {
        console.error(err);
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify({ payload: [] }));
      } else {
        const stationId = records[0].get("primary_key");
        database("History_Cases")
          .select({
            view: "Grid view",
            fields: ["case_title", "primary_key"],
            filterByFormula: `({station_id} = ${stationId})`
          })
          .firstPage((err, records) => {
            if (err) {
              console.error(err);
              res.set("Content-Type", "application/json");
              res.send(JSON.stringify({ payload: [] }));
            } else {
              const caseTitles = [];
              records.forEach(record => {
                const element = {
                  title: record.get("case_title"),
                  id: record.get("primary_key")
                };
                caseTitles.push(element);
              });
              res.set("Content-Type", "application/json");
              res.send(JSON.stringify({ payload: [...caseTitles] }));
            }
          });
      }
    });
});

// this serves index.html no matter what the route, so that React routing can take charge of what to display and the server stays out of interval
// if we need active routes (e.g. for database queries), all we'll likely need to do is add those routes above this app.get(), so they'll be hit first
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
