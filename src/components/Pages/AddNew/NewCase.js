/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

import airtableQuery from "../../../utils/fetch";

import TopBar from "../../TopBar/TopBar";

export default class NewCase extends React.Component {
  state = {
    tickDisplayed: false,
    caseTitle: "",
    caseDetails: "",
    markScheme: []
  };

  submitCase = () => {
    airtableQuery(`/api/get-station/${this.props.match.params.station}`).then(
      res => {
        console.log("added station to database");
        console.log("res:", res);
        fetch(`/api/add-case/${res}`, {
          method: "post",
          body: JSON.stringify({ text: "hello world" })
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
