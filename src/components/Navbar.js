import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link to="/history">History</Link>
      </li>
      <li>
        <Link to="/examinations">Examinations</Link>
      </li>
      <li>
        <Link to="/extras">Extras</Link>
      </li>
      <li>
        <Link to="/stats">Statistics</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
