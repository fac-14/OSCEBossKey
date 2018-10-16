const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const database = require("./database");

const functions = require("./utils/airtableReturns");

const app = express();
app.set("port", process.env.PORT || 3333);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/api/add-station/:station", (req, res) => {
  database("History_Stations").create(
    {
      station_name: req.params.station
    },
    (err, record) => {
      if (err) {
        // TODO: handle error better
        console.error(err);
        return;
      }
    }
  );
});

app.get("/api/history", (req, res) => {
  database("History_Stations")
    .select()
    .firstPage((err, records) => {
      if (err) functions.returnEmptyArray(res, err);
      else {
        const stations = [];
        records.forEach(record => {
          stations.push(record.get("station_name"));
        });
        functions.returnPopulatedArray(res, stations);
      }
    });
});

app.get("/api/history/:station", (req, res) => {
  const caseTitles = [];
  database("History_Stations")
    .select({
      fields: ["primary_key"],
      filterByFormula: `({station_name} = '${req.params.station}')`
    })
    .firstPage((err, record) => {
      if (err || record.length === 0) functions.returnEmptyArray(res, err);
      else {
        database("History_Cases")
          .select({
            fields: ["case_title", "primary_key"],
            filterByFormula: `({station_id} = ${record[0].get("primary_key")})`
          })
          .eachPage(
            (records, fetchNextPage) => {
              records.forEach(record => {
                caseTitles.push({
                  title: record.get("case_title"),
                  id: record.get("primary_key")
                });
              });
              fetchNextPage();
            },
            err => {
              if (err) functions.returnEmptyArray(res, err);
              functions.returnPopulatedArray(res, caseTitles);
            }
          );
      }
    });
});

// this serves index.html no matter what the route, so that React routing can take charge of what to display and the server stays out of interval
// if we need active routes (e.g. for database queries), all we'll likely need to do is add those routes above this app.get(), so they'll be hit first
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
