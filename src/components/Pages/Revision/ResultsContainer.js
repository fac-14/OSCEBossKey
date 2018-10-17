/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import RevisionTitle from "./RevisionTitle";
import timerFormat from "../../../utils/timerFormat";

export default class ResultsContainer extends React.Component {
  render() {
    return (
      <div id="revision">
        <RevisionTitle caseTitle={this.props.caseTitle} />
        <h3 id="results-h3">Results</h3>
        <div id="revision-container">
          <ul id="revision-list">
            <li className="result-list-item" id="score-percent">
              {Math.floor(
                (this.props.markSchemeCompleted / this.props.markSchemeTotal) *
                  100
              )}
              %
            </li>
            <li className="result-list-item">
              You performed {this.props.markSchemeCompleted} of{" "}
              {this.props.markSchemeTotal} tasks in{" "}
              {timerFormat(this.props.timeElapsed)}.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ResultsContainer.propTypes = {
  markSchemeCompleted: PropTypes.number,
  markSchemeTotal: PropTypes.number,
  markSchemeElements: PropTypes.arrayOf(PropTypes.object),
  caseTitle: PropTypes.string,
  timeElapsed: PropTypes.number
};
