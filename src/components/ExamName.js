/* eslint-disable class-methods-use-this */
import "../assets/exam-name.scss";

import React from "react";
import PropTypes from "prop-types";

export default class ExamName extends React.Component {
  render() {
    return <h1>History</h1>;
  }
}

ExamName.propTypes = {
  exam: PropTypes.string
};
