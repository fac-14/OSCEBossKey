import "../assets/index.scss";

import React from "react";

// this is the module that lets us do the routing
import { BrowserRouter as Router, Route } from "react-router-dom";

// import all page classes here
import Home from "./Pages/Home";
import Cases from "./Cases/CasesPage";
import Revision from "./Pages/Revision/RevisionPage";
import History from "./Pages/History";
import Examinations from "./Pages/Examinations";
import Extras from "./Pages/Extras";
import Statistics from "./Pages/Statistics";
import NewCase from "./Cases/NewCase";

// App is no longer a React component, but a function that returns a different page component, e.g. HistoryCaseRevision, depending on the route
// we should probably add a 404 component to display when the user hits a route for which there is no component
const App = () => (
  <Router>
    <div className="page-wrapper">
      <Route exact path="/" component={Home} />
      <Route strict exact path="/history" component={History} />
      <Route strict exact path="/examinations" component={Examinations} />
      <Route strict exact path="/extras" component={Extras} />
      <Route strict exact path="/stats" component={Statistics} />
      <Route strict exact path="/history/:station" component={Cases} />
      <Route
        strict
        exact
        path="/history/:station/add-case"
        component={NewCase}
      />
      <Route
        strict
        exact
        path="/history/:station/case/:caseid"
        component={Revision}
      />
    </div>
  </Router>
);

export default App;
