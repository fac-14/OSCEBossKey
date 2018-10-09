import "../assets/reset.scss";

import React from "react";

// this is the module that lets us do the routing
import { BrowserRouter as Router, Route } from "react-router-dom";

// import all page classes here
import HistoryStations from "./HistoryStations";
import HistoryCaseRevision from "./HistoryCaseRevision";

// App is no longer a React component, but a function that returns a different page component, e.g. HistoryCaseRevision, depending on the route
// we should probably add a 404 component to display when the user hits a route for which there is no component
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HistoryCaseRevision} />
      <Route path="/history" component={HistoryStations} />
    </div>
  </Router>
);

export default App;
