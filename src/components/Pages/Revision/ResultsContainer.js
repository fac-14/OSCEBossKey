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
          <p id="revision-text" data-testid="Results">
            <h1>
              {Math.floor(
                (this.props.markSchemeCompleted / this.props.markSchemeTotal) *
                  100
              )}
              %
            </h1>
            <h2>
              You performed {this.props.markSchemeCompleted} of{" "}
              {this.props.markSchemeTotal} tasks.
            </h2>
          </p>
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
