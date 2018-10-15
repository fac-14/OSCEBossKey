/* eslint-disable class-methods-use-this */
import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import dummyData from "../../utils/dummy-data.json";
import AddNew from "./AddNew/AddNewTile";
import Title from "../Stations/Title";
import Navbar from "../Navbar/Navbar";

export class ExtrasPage extends React.Component {
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
        <Title exam="Extras" />
        <div id="tile-wrapper">
          <AddNew />
          {stationTiles}
        </div>
        <Navbar />
      </React.Fragment>
    );
  }
}

ExtrasPage.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
};

export default withRouter(ExtrasPage);
