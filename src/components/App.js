import "../assets/reset.scss";

import React from "react";

// this is the module that lets us do the routing
import { BrowserRouter as Router, Route } from "react-router-dom";

// import all page classes here
import HelloWorld from "./HelloWorld";
import HistoryCaseRevision from "./HistoryCaseRevision";
import History from "./History";
import Examinations from "./Examinations";
import Extras from "./Extras";
import Statistics from "./Statistics";

// App is no longer a React component, but a function that returns a different page component, e.g. HistoryCaseRevision, depending on the route
// we should probably add a 404 component to display when the user hits a route for which there is no component
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HistoryCaseRevision} />
      <Route path="/history" component={History} />
      <Route path="/examinations" component={Examinations} />
      <Route path="/extras" component={Extras} />
      <Route path="/stats" component={Statistics} />
    </div>
  </Router>
);

export default App;
