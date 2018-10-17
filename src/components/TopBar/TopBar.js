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
          <BackButton link={this.props.exam} />
          <h3 id="topbar-title">{this.props.stationName}</h3>
          <h3 id="topbar-timer">{timerFormat(this.props.time)}</h3>
          {this.props.tickDisplayed && (
            <CompleteButton
              exam={this.props.exam}
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
  exam: PropTypes.string,
  submitCase: PropTypes.func,
  stationName: PropTypes.string,
  tickDisplayed: PropTypes.bool,
  time: PropTypes.number
};
