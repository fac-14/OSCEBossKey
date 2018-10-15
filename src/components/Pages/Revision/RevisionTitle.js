/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

export default class RevisionTitle extends React.Component {
  render() {
    return <h2 id="revision-title">{this.props.caseTitle}</h2>;
  }
}

RevisionTitle.propTypes = {
  caseTitle: PropTypes.string
};
