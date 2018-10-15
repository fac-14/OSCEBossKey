/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import BackButton from "./BackButton";
import CompleteButton from "./CompleteButton";

export default class TopBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="topbar-container">
          <BackButton />
          <h3 id="topbar-title">{this.props.stationName}</h3>
          <CompleteButton
            submitCase={this.props.submitCase}
            tickDisplayed={this.props.tickDisplayed}
          />
        </div>
      </React.Fragment>
    );
  }
}

TopBar.propTypes = {
  submitCase: PropTypes.func,
  stationName: PropTypes.string,
  tickDisplayed: PropTypes.bool
};
