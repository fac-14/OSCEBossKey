/* eslint-disable class-methods-use-this */
import "../assets/station-name.scss";

import React from "react";
import PropTypes from "prop-types";

export default class StationName extends React.Component {
  render() {
    return <h1 id="header--station-name">{this.props.stationName}</h1>;
  }
}

StationName.propTypes = {
  stationName: PropTypes.string
};
