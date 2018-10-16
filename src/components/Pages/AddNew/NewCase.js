/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

import TopBar from "../../TopBar/TopBar";

export default class NewCase extends React.Component {
  render() {
    return (
      <React.Fragment id="add-new-wrapper">
        <TopBar
          exam={this.props.match.params.exam}
          stationName={this.props.match.params.station}
        />
      </React.Fragment>
    );
  }
}

NewCase.propTypes = {
  match: PropTypes.object
};
