/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

const RevisionTitle = props => <h2 id="revision-title">{props.caseTitle}</h2>;

RevisionTitle.propTypes = {
  caseTitle: PropTypes.string
};

export default RevisionTitle;
