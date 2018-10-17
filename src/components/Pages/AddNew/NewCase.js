/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

import airtableQuery from "../../../utils/fetch";

import NewTileInput from "./NewTileInput";
import TopBar from "../../TopBar/TopBar";
import InstructionText from "./InstructionText";

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

  userTypes = input => {
    this.setState({ caseTitle: input });
  };

  caseDetailsChange = event => {
    this.setState({ caseDetails: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <TopBar
          backLink={this.props.match.params.exam}
          stationName={this.props.match.params.station}
          submitCase={this.submitCase}
          tickDisplayed={this.state.tickDisplayed}
        />
        <div id="add-new-wrapper">
          <NewTileInput
            instructionText={"Case title"}
            userTypes={this.userTypes}
          />
          <InstructionText text={"Case details"} />
          <textarea
            onChange={this.caseDetailsChange}
            placeholder="Add patient details"
            max-length="5000"
          />
        </div>
      </React.Fragment>
    );
  }
}

NewCase.propTypes = {
  match: PropTypes.object
};
