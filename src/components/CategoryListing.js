/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AddNew from "./Pages/AddNew/AddNewTile";
import Title from "./Stations/Title";
import Navbar from "./Navbar/Navbar";

import airtableQuery from "../utils/fetch";
import removeHyphens from "../utils/removeHyphens";

export default class CategoryListing extends React.Component {
  state = {
    stations: []
  };

  componentDidMount() {
    // two requests so that it fetches the new data from a recent POST request
    // this is terrible and I'm sorry
    airtableQuery(`/api/${this.props.section}/`).then(
      airtableQuery(`/api/${this.props.section}/`).then(res => {
        this.setState(() => ({ stations: res.payload }));
      })
    );
  }

  render() {
    const stationTiles = this.state.stations.map((tile, index) => (
      <Link key={index} to={`/${this.props.section}/${tile}`}>
        <div className="tile" key={index}>
          {removeHyphens(tile)}
        </div>
      </Link>
    ));
    return (
      <React.Fragment>
        <Title exam={this.props.section} />
        <div id="tile-wrapper">
          <AddNew />
          {stationTiles}
        </div>
        <Navbar />
      </React.Fragment>
    );
  }
}

CategoryListing.propTypes = {
  section: PropTypes.string
};
