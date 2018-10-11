/* eslint-disable class-methods-use-this */
import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import dummyData from "../utils/dummy-data.json";
import AddNewStation from "./AddNewStation";
import ExamName from "./ExamName";
import "../assets/history.scss";
import Navbar from "./Navbar";

class History extends React.Component {
  state = {
    stations: dummyData.history
  };

  render() {
    const stationElements = Object.keys(this.state.stations).map(
      (element, index) => (
        <Link key={index} to={`/history/${element}`}>
          <div key={index}>{element}</div>
        </Link>
      )
    );
    return (
      <React.Fragment>
        <ExamName exam="history" />
        <div id="history-station-list">
          <AddNewStation />
          {stationElements}
        </div>
        <Navbar />
      </React.Fragment>
    );
  }
}

History.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
};

export default withRouter(History);
