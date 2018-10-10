/* eslint-disable class-methods-use-this */
import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import dummyData from "../utils/dummy-data.json";

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
        <h1>History</h1>
        <p>Add new</p>
        {stationElements}
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
