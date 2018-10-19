const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { database, queries } = require("./database");
const functions = require("./utils/airtableReturns");

const app = express();
app.set("port", process.env.PORT || 3333);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/api/add-station/:station", req => {
  if (req.params.station) return queries.addStation(req.params.station);
});

app.get("/api/get-station/:station", (req, res) => {
  if (req.params.station) return queries.getStation(res, req.params.station);
});

app.get("/api/get-mark-scheme-elements", (req, res) =>
  queries.getMarkScheme(res)
);

app.post("/api/add-case/:station", req => {
  const { title, details, markscheme } = req.body;
  return queries.addCase(req.params.station, title, details, markscheme);
});

app.get("/api/history/:station", (req, res) => {
  if (req.params.station) return queries.getCases(res, req.params.station);
});

app.post("/api/add-mark-scheme-element", req => {
  if (req.body.element) return queries.addMarkSchemeElement(req.body.element);
});

// the airTable query doesn't actually use req.params.station for error checking or validation
// this will cause an extra API call but it might be a nice addition when the amount of data starts to grow
app.get("/api/history/:station/case/:id", (req, res) => {
  database("History_Cases")
    .select({
      fields: ["case_title", "case_details", "mark_scheme"],
      filterByFormula: `({primary_key} = '${req.params.id}')`
    })
    .firstPage((err, record) => {
      if (err || record.length === 0)
        functions.returnEmptyPayload(res, err, {});
      else {
        functions.returnPopulatedPayload(res, {
          title: record[0].get("case_title"),
          details: record[0].get("case_details"),
          mark_scheme: [...record[0].get("mark_scheme").split(", ")]
        });
      }
    });
});

app.get("/api/:section/", (req, res) => {
  const section = req.params.section.replace(/^\w/, c => c.toUpperCase());
  if (
    section === "History" ||
    section === "Examinations" ||
    section === "Extras"
  ) {
    database(`${section}_Stations`)
      .select()
      .firstPage((err, records) => {
        if (err) functions.returnEmptyPayload(res, err);
        else {
          const stations = [];
          records.forEach(record => {
            stations.push(record.get("station_name"));
          });
          functions.returnPopulatedPayload(res, stations);
        }
      });
  } else {
    functions.returnEmptyPayload(res, `Incorrect Route: ${section} `);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
