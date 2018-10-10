import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
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
      <Link
        key={index}
        to={`/history/${this.state.station}/case/${element.caseTitle}`}
      >
        <div key={index}>{element.caseTitle}</div>
      </Link>
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
