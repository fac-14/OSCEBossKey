import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import dummyData from "../dummy-data.json";

import StationName from "./StationName";
import AddNewCase from "./AddNewCase";
import Navbar from "./Navbar";

class HistoryStationCases extends React.Component {
  state = {
    station: this.props.match.params.station.replace("-", " "),
    cases: dummyData.history[0].cases
  };

  render() {
    const caseElements = this.state.cases.map((element, index) => (
      <div key={index}>{element.caseTitle}</div>
    ));
    return (
      <React.Fragment>
        <StationName stationName={this.state.station} />
        <AddNewCase station={this.state.station} />
        {caseElements}
        <Navbar />
      </React.Fragment>
    );
  }
}

HistoryStationCases.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
};

export default withRouter(HistoryStationCases);
