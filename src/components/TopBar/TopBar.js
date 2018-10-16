/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import BackButton from "./BackButton";
import CompleteButton from "./CompleteButton";
import timeDisplay from "../../utils/timer.function";

export default class TopBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="topbar-container">
          <BackButton />
          <h3 id="topbar-title">
            {this.props.stationName}
            <span>{timeDisplay.timerFormat(this.props.time)}</span>
          </h3>
          {this.props.tickDisplayed && (
            <CompleteButton
              submitCase={this.props.submitCase}
              tickDisplayed={this.props.tickDisplayed}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

TopBar.propTypes = {
  submitCase: PropTypes.func,
  stationName: PropTypes.string,
  tickDisplayed: PropTypes.bool,
  time: PropTypes.number
};
