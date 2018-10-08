/* eslint-disable class-methods-use-this */

import React from "react";

export default class StationName extends React.Component {
  render() {
    return <h1>{this.props.stationName}</h1>;
  }
}
