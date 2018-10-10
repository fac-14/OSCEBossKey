import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from "../assets/icons/history.svg";
import examination from "../assets/icons/examination.svg";
import extras from "../assets/icons/extras.svg";
import statistics from "../assets/icons/statistics.svg";
import "../assets/navbar.scss";

const Navbar = () => (
  <div>
    <ul id="navbar">
      <li>
        <Link to="/">
          <img src={history} />
          <h3>History</h3>
        </Link>
      </li>
      <li>
        <Link to="/examinations">
          <img src={examination} />
          <h3>Examinations</h3>
        </Link>
      </li>
      <li>
        <Link to="/extras">
          <img src={extras} />
          <h3>Extras</h3>
        </Link>
      </li>
      <li>
        <Link to="/stats">
          <img src={statistics} />
          <h3>Statistics</h3>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
