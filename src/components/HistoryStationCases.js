import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import dummyData from "../utils/dummy-data.json";

import StationName from "./StationName";
import AddNewCase from "./AddNewCase";

class HistoryStationCases extends React.Component {
  state = {
    station: this.props.match.params.station.replace("-", " "),
    cases: dummyData.history[this.props.match.params.station]
  };

  // still need to render NavBar
  render() {
    console.log(`data: ${this.state.cases}`);
    const caseElements = this.state.cases.map((element, index) => (
      <div key={index}>{element.title}</div>
    ));
    return (
      <React.Fragment>
        <StationName stationName={this.state.station} />
        <AddNewCase station={this.state.station} />
        {caseElements}
      </React.Fragment>
    );
  }
}

HistoryStationCases.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
};

export default withRouter(HistoryStationCases);
