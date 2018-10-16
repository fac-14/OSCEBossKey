/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

import airtableQuery from "../../../utils/fetch";

import TopBar from "../../TopBar/TopBar";

export default class NewCase extends React.Component {
  state = {
    tickDisplayed: false,
    caseTitle: "test case title",
    caseDetails: "test case details",
    markScheme: ["test", "case", "mark", "scheme"]
  };

  submitCase = () => {
    airtableQuery(`/api/get-station/${this.props.match.params.station}`).then(
      res => {
        fetch(`/api/add-case/${res.payload}`, {
          method: "post",
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: `title=${this.state.caseTitle}&details=${
            this.state.caseDetails
          }&markscheme=${this.state.markScheme.join(", ")}`
        });
      }
    );
  };

  render() {
    return (
      <React.Fragment id="add-new-wrapper">
        <TopBar
          exam={this.props.match.params.exam}
          stationName={this.props.match.params.station}
          submitCase={this.submitCase}
          tickDisplayed={this.state.tickDisplayed}
        />
      </React.Fragment>
    );
  }
}

NewCase.propTypes = {
  match: PropTypes.object
};
