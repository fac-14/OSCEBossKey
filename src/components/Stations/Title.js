/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

export default class SectionsPageTitle extends React.Component {
  render() {
    return <h1 id="title">{this.props.exam}</h1>;
  }
}

SectionsPageTitle.propTypes = {
  exam: PropTypes.string
};
