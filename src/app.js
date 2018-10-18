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

app.get("/api/get-station/:station", (req, res) => {
  database("History_Stations")
    .select({
      fields: ["primary_key"],
      filterByFormula: `({station_name} = '${req.params.station.replace(
        /-/g,
        " "
      )}')`
    })
    .firstPage((err, record) => {
      if (err || record.length === 0) {
        return functions.returnEmptyPayload(res, err);
      }
      return functions.returnPopulatedPayload(res, record[0].id);
    });
});

app.get("/api/get-mark-scheme-elements", (req, res) => {
  const markSchemeArray = [];
  database("History_Mark_Scheme_Elements")
    .select({
      fields: ["mark_scheme_elements"]
    })
    .eachPage(
      (records, fetchNextPage) => {
        records.forEach(record =>
          markSchemeArray.push(record.get("mark_scheme_elements"))
        );
        fetchNextPage();
      },
      err => {
        if (err) return console.error(err);
        return functions.returnPopulatedPayload(res, markSchemeArray);
      }
    );
});

app.post("/api/add-case/:station", (req, res) => {
  database("History_Cases").create(
    {
      station_id: [req.params.station],
      case_title: req.body.title,
      case_details: req.body.details,
      mark_scheme: req.body.markscheme
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

app.get("/api/history/:station", (req, res) => {
  const caseTitles = [];
  database("History_Stations")
    .select({
      fields: ["primary_key"],
      filterByFormula: `({station_name} = '${req.params.station}')`
    })
    .firstPage((err, record) => {
      if (err || record.length === 0) functions.returnEmptyPayload(res, err);
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
              if (err) functions.returnEmptyPayload(res, err);
              functions.returnPopulatedPayload(res, caseTitles);
            }
          );
      }
    });
});

app.post("/api/add-mark-scheme-element", (req, res) => {
  database("History_Mark_Scheme_Elements").create(
    {
      mark_scheme_elements: req.body.element
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

// this serves index.html no matter what the route, so that React routing can take charge of what to display and the server stays out of interval
// if we need active routes (e.g. for database queries), all we'll likely need to do is add those routes above this app.get(), so they'll be hit first
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
