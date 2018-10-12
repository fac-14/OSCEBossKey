/* eslint-disable class-methods-use-this */
import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import dummyData from "../utils/dummy-data.json";
import AddNewStation from "./AddNewStation";
import ExamName from "./ExamName";
import Navbar from "./Navbar";

import airtableQuery from "../utils/fetch";
import removeHyphens from "../utils/removeHyphens";

class History extends React.Component {
  state = {
    stations: []
  };

  componentDidMount() {
    airtableQuery("/api/history/").then(res => {
      this.setState(() => ({ stations: res.payload }));
    });
  }

  render() {
    const stationElements = this.state.stations.map((element, index) => (
      <Link key={index} to={`/history/${element}`}>
        <div className="stations" key={index}>
          {removeHyphens(element)}
        </div>
      </Link>
    ));
    return (
      <React.Fragment>
        <ExamName exam="history" />
        <div id="history">
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
