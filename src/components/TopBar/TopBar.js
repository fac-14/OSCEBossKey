/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import BackButton from "./BackButton";
import CompleteButton from "./CompleteButton";
import timerFormat from "../../utils/timerFormat";

import removeHyphens from "../../utils/removeHyphens";

export default class TopBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="topbar-container">
          <BackButton link={this.props.backLink} />
          <h3 id="topbar-title">
            {this.props.stationName && removeHyphens(this.props.stationName)}
          </h3>
          {this.props.timer && (
            <h3
              className={this.props.time >= 600 ? `timer-long` : ``}
              id="topbar-timer"
            >
              {timerFormat(this.props.time)}
            </h3>
          )}
          {this.props.tickDisplayed && (
            <CompleteButton
              exam={this.props.backLink}
              station={this.props.station}
              onClick={this.props.submitCase}
              tickDisplayed={this.props.tickDisplayed}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

TopBar.propTypes = {
  backLink: PropTypes.string,
  exam: PropTypes.string,
  submitCase: PropTypes.func,
  stationName: PropTypes.string,
  station: PropTypes.string,
  tickDisplayed: PropTypes.bool,
  time: PropTypes.number,
  timer: PropTypes.bool
};
