import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import historyIcon from "../../assets/icons/history-black.svg";
import examinationIcon from "../../assets/icons/examinations-black.svg";
import extrasIcon from "../../assets/icons/extras-black.svg";
import statisticsIcon from "../../assets/icons/statistics-black.svg";

const Navbar = () => (
  <div>
    <ul id="navbar">
      <li className="history-li">
        <Link to="/history">
          <img id="history-icon" src={historyIcon} />
          <h3 className="text">History</h3>
        </Link>
      </li>
      <li className="examinations-li">
        <Link to="/examinations">
          <img id="examinations-icon" src={examinationIcon} />
          <h3 className="text">Examinations</h3>
        </Link>
      </li>
      <li className="extras-li">
        <Link to="/extras">
          <img id="extras-icon" src={extrasIcon} />
          <h3 className="text">Extras</h3>
        </Link>
      </li>
      <li className="stats-li">
        <Link to="/stats">
          <img id="statistics-icon" src={statisticsIcon} />
          <h3 className="text">Statistics</h3>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
