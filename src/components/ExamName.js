/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

export default class ExamName extends React.Component {
  render() {
    return <h1 id="header--exam-name">{this.props.exam}</h1>;
  }
}

ExamName.propTypes = {
  exam: PropTypes.string
};
