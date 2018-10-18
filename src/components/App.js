import "../assets/index.scss";

import React from "react";

// this is the module that lets us do the routing
import { BrowserRouter as Router, Route } from "react-router-dom";

// import all page classes here
import Home from "./Pages/Home";
import Cases from "./Cases/CasesPage";
import Revision from "./Pages/Revision/RevisionPage";
import CategoryListing from "./CategoryListing";
import Statistics from "./Pages/Statistics";
import NewCase from "./Pages/AddNew/NewCase";
import AddTile from "./Pages/AddNew/AddTile";
import ComingSoon from "./Pages/ComingSoon";

// App is no longer a React component, but a function that returns a different page component, e.g. HistoryCaseRevision, depending on the route
// we should probably add a 404 component to display when the user hits a route for which there is no component
const App = () => (
  <Router>
    <div className="page-wrapper">
      <Route exact path="/" component={Home} />
      <Route strict exact path="/coming-soon" component={ComingSoon} />
      <Route strict exact path="/stats" component={Statistics} />
      <Route strict exact path="/history/:station" component={Cases} />
      <Route strict exact path="/:exam/:station/add-case" component={NewCase} />
      <Route
        strict
        exact
        path="/:exam/:station/case/:caseid"
        component={Revision}
      />
      <Route strict exact path="/:exam/add/station" component={AddTile} />
      <Route
        strict
        exact
        path="/history"
        render={() => <CategoryListing bg="#009f5c" section="history" />}
      />
      <Route
        strict
        exact
        path="/examinations"
        render={() => <CategoryListing bg="#ffbe00" section="examinations" />}
      />
      <Route
        strict
        exact
        path="/extras"
        render={() => <CategoryListing bg="#e53d00" section="extras" />}
      />
    </div>
  </Router>
);

export default App;
