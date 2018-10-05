/* eslint-disable class-methods-use-this */

import React from "react";
import BackButton from "./BackButton";
import StationName from "./StationName";
import TickButton from "./TickButton";
import CaseTitle from "./CaseTitle";

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackButton />
        <StationName stationName={this.props.stationName} />
        <TickButton tickDisplayed={this.props.tickDisplayed} />
        <CaseTitle caseTitle={this.props.caseTitle} />
      </React.Fragment>
    );
  }
}
