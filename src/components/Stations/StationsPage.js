/* eslint-disable class-methods-use-this */
import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import dummyData from "../../utils/dummy-data.json";
import AddNewTile from "../Pages/AddNew/AddNewTile";
import Title from "./Title";
import Navbar from "../Navbar/Navbar";

class StationsPage extends React.Component {
  state = {
    stations: dummyData.history
  };

  render() {
    const stationTiles = Object.keys(this.state.stations).map((tile, index) => (
      <Link key={index} to={`/history/${tile}`}>
        <div className="tile" key={index}>
          {tile}
        </div>
      </Link>
    ));
    return (
      <React.Fragment>
        <Title exam="history" />
        <div id="tile-wrapper">
          <AddNewTile />
          {stationTiles}
        </div>
        <Navbar />
      </React.Fragment>
    );
  }
}

StationsPage.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
};

export default withRouter(StationsPage);
