/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

const CasesPageTitle = props => <h1 id="title">{props.stationName}</h1>;

export default CasesPageTitle;

CasesPageTitle.propTypes = {
  stationName: PropTypes.string
};
