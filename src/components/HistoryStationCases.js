import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import dummyData from "../utils/dummy-data.json";

import StationName from "./StationName";
import AddNewCase from "./AddNewCase";

class HistoryStationCases extends React.Component {
  state = {
    station: this.props.match.params.station,
    cases: dummyData.history[this.props.match.params.station]
  };

  // still need to render NavBar
  render() {
    const caseElements = this.state.cases.map((element, index) => {
      const caseLink = `/history/${this.state.station}/case/${index}`;
      return (
        <Link key={index} to={caseLink}>
          <div key={index}>{element.title}</div>
        </Link>
      );
    });
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
