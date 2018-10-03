const app = require("./app.js");

app.listen(app.get("port"), () => {
  console.log("App is listening on port %d", app.get("port"));
});
