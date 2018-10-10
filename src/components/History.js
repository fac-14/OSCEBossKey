/* eslint-disable class-methods-use-this */
import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import dummyData from "../dummy-data.json";

import StationName from "./StationName";
import AddNewCase from "./AddNewCase";
import Navbar from "./Navbar";

class History extends React.Component {
  state = {
    stations: dummyData.history
  };

  render() {
    const stationElements = this.state.stations.map((element, index) => (
      <div key={index}>{element.stationName}</div>
    ));
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
