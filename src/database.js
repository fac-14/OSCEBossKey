require("dotenv").config();
const Airtable = require("airtable");
const functions = require("./utils/airtableReturns");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY
});

const database = Airtable.base("appPuOj2tvImyi2vJ");

const queries = {
  getStation: (res, station) => {
    database("History_Stations")
      .select({
        fields: ["primary_key"],
        filterByFormula: `({station_name} = '${station}')`
      })
      .firstPage((err, record) => {
        if (err || record.length === 0)
          return functions.returnEmptyPayload(res, err);
        return functions.returnPopulatedPayload(res, record[0].id);
      });
  },
  getMarkScheme: res => {
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
          if (err || markSchemeArray.length === 0)
            return functions.returnEmptyPayload(res, err);
          return functions.returnPopulatedPayload(res, markSchemeArray);
        }
      );
  }
};

module.exports = { database, queries };
