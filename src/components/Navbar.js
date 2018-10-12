import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import historyIcon from "../assets/icons/history-black.svg";
import examinationIcon from "../assets/icons/examinations-black.svg";
import extrasIcon from "../assets/icons/extras-black.svg";
import statisticsIcon from "../assets/icons/statistics-black.svg";

const Navbar = () => (
  <div>
    <ul id="navbar">
      <li>
        <Link to="/history">
          <img id="navbar--history-icon" src={historyIcon} />
          <h3>History</h3>
        </Link>
      </li>
      <li>
        <Link to="/examinations">
          <img id="navbar--examinations-icon" src={examinationIcon} />
          <h3>Examinations</h3>
        </Link>
      </li>
      <li>
        <Link to="/extras">
          <img id="navbar--extras-icon" src={extrasIcon} />
          <h3>Extras</h3>
        </Link>
      </li>
      <li>
        <Link to="/stats">
          <img id="navbar--statistics-icon" src={statisticsIcon} />
          <h3>Statistics</h3>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
