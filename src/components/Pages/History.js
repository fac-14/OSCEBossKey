/* eslint-disable class-methods-use-this */

import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AddNew from "./AddNew/AddNewTile";
import Title from "../Stations/Title";
import Navbar from "../Navbar/Navbar";

import airtableQuery from "../../utils/fetch";
import removeHyphens from "../../utils/removeHyphens";

class HistoryPage extends React.Component {
  state = {
    stations: []
  };

  componentDidMount() {
    // two requests so that it fetches the new data from a recent POST request
    // this is terrible and I'm sorry
    airtableQuery("/api/history/").then(
      airtableQuery("/api/history/").then(res => {
        this.setState(() => ({ stations: res.payload }));
      })
    );
  }

  render() {
    const stationTiles = this.state.stations.map((tile, index) => (
      <Link key={index} to={`/history/${tile}`}>
        <div className="tile" key={index}>
          {removeHyphens(tile)}
        </div>
      </Link>
    ));
    return (
      <React.Fragment>
        <Title exam="history" />
        <div id="tile-wrapper">
          <AddNew />
          {stationTiles}
        </div>
        <Navbar />
      </React.Fragment>
    );
  }
}

HistoryPage.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
};

export default withRouter(HistoryPage);
