import "../assets/reset.scss";

import React from "react";

// this is the module that lets us do the routing
import { BrowserRouter as Router, Route } from "react-router-dom";

// import all page classes here
import Home from "./Home";
import HistoryStationCases from "./HistoryStationCases";
import HistoryCaseRevision from "./HistoryCaseRevision";
import History from "./History";
import Examinations from "./Examinations";
import Extras from "./Extras";
import Statistics from "./Statistics";
import NewHistoryCase from "./NewHistoryCase";

// App is no longer a React component, but a function that returns a different page component, e.g. HistoryCaseRevision, depending on the route
// we should probably add a 404 component to display when the user hits a route for which there is no component
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route strict exact path="/history" component={History} />
      <Route strict exact path="/examinations" component={Examinations} />
      <Route strict exact path="/extras" component={Extras} />
      <Route strict exact path="/stats" component={Statistics} />
      <Route
        strict
        exact
        path="/history/:station"
        component={HistoryStationCases}
      />
      <Route
        strict
        exact
        path="/history/:station/add-case"
        component={NewHistoryCase}
      />
      <Route
        strict
        exact
        path="/history/:station/case/:case"
        component={HistoryCaseRevision}
      />
    </div>
  </Router>
);

export default App;
