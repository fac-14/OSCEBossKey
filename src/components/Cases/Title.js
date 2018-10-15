/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

export default class CasesPageTitle extends React.Component {
  render() {
    return <h1 id="title">{this.props.stationName}</h1>;
  }
}

CasesPageTitle.propTypes = {
  stationName: PropTypes.string
};
