/* eslint-disable class-methods-use-this */
import "../assets/header.scss";

import React from "react";
import PropTypes from "prop-types";
import BackButton from "./BackButton";
import StationName from "./StationName";
import TickButton from "./TickButton";
import CaseTitle from "./CaseTitle";

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="header--top-row">
          <BackButton closeCase={this.props.closeCase} />
          <StationName stationName={this.props.stationName} />
          <TickButton
            submitCase={this.props.submitCase}
            tickDisplayed={this.props.tickDisplayed}
          />
        </div>
        <CaseTitle caseTitle={this.props.caseTitle} />
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  closeCase: PropTypes.func,
  submitCase: PropTypes.func,
  stationName: PropTypes.string,
  tickDisplayed: PropTypes.bool,
  caseTitle: PropTypes.string
};
