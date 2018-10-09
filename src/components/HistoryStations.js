// temporary class to show that React routes work

import React from "react";

import StationName from "./StationName";

export default class HistoryStations extends React.Component {
  state = {
    stationName: "Chest Pain",
    stationCases: []
  };

  render() {
    return (
      <React.Fragment>
        <StationName stationName={this.state.stationName} />
      </React.Fragment>
    );
  }
}
