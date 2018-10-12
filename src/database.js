require("dotenv").config();
const Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY
});

const base = Airtable.base("appPuOj2tvImyi2vJ");

module.exports = base;
