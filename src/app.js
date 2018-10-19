const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const queries = require("./database");
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

app.get("/api/history/:station/case/:id", (req, res) => {
  if (req.params.id) return queries.getSingleCase(res, req.params.id);
});

app.get("/api/:section/", (req, res) => {
  const section = req.params.section.replace(/^\w/, c => c.toUpperCase());
  if (
    section === "History" ||
    section === "Examinations" ||
    section === "Extras"
  ) {
    return queries.getSectionStations(res, section);
  }
  return functions.returnEmptyPayload(res, `Incorrect Route: ${section} `);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
