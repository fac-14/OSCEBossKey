import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import historyIcon from "../assets/icons/history.svg";
import examinationIcon from "../assets/icons/examination.svg";
import extrasIcon from "../assets/icons/extras.svg";
import statisticsIcon from "../assets/icons/statistics.svg";
import "../assets/navbar.scss";

const Navbar = () => (
  <div>
    <ul id="navbar">
      <li>
        <Link to="/history">
          <img src={historyIcon} />
          <h3>History</h3>
        </Link>
      </li>
      <li>
        <Link to="/examinations">
          <img src={examinationIcon} />
          <h3>Examinations</h3>
        </Link>
      </li>
      <li>
        <Link to="/extras">
          <img src={extrasIcon} />
          <h3>Extras</h3>
        </Link>
      </li>
      <li>
        <Link to="/stats">
          <img src={statisticsIcon} />
          <h3>Statistics</h3>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;