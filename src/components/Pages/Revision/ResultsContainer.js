/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import RevisionTitle from "./RevisionTitle";

export default class ResultsContainer extends React.Component {
  state = {};
  render() {
    return (
      <div id="revision">
        <RevisionTitle caseTitle="Results" />
        <div id="revision-container">
          <ul id="revision-list">
            <li class="result-list-item" id="score-percent">
              {Math.floor(
                (this.props.markSchemeCompleted / this.props.markSchemeTotal) *
                  100
              )}
              %
            </li>
            <li class="result-list-item">
              You performed {this.props.markSchemeCompleted} of{" "}
              {this.props.markSchemeTotal} tasks.
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
  markSchemeElements: PropTypes.arrayOf(PropTypes.object)
};
