/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

import airtableQuery from "../../../utils/fetch";
import TopBar from "../../TopBar/TopBar";
import AddNewContainer from "./AddNewContainer";
import NewTileInput from "./NewTileInput";
import functions from "../../../utils/RevisionPage.functions";

export default class NewCase extends React.Component {
  state = {
    tickDisplayed: true,
    caseTitle: "test case title",
    caseDetails: "test case details",
    caseDetailsDisplayed: true,
    markSchemeElements: []
  };

  // write query to get mark scheme element

  submitCase = () => {
    const markScheme = [];
    this.state.markSchemeElements.forEach(element => {
      markScheme.push(element.text);
    });
    airtableQuery(`/api/get-station/${this.props.match.params.station}`).then(
      res => {
        fetch(`/api/add-case/${res.payload}`, {
          method: "post",
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: `title=${this.state.caseTitle}&details=${
            this.state.caseDetails
          }&markscheme=${markScheme.join(", ")}`
        });
      }
    );
  };

  componentDidMount() {
    airtableQuery("/api/get-mark-scheme-elements").then(res => {
      const markSchemeElements = [];
      res.payload.forEach(element => {
        markSchemeElements.push({
          text: element,
          added: false
        });
      });
      this.setState({
        markSchemeElements
      });
    });
  }

  // write a function to add to list
  markComplete = id => {
    this.setState(prevState => {
      // make a copy of the previous state
      const markSchemeElements = prevState.markSchemeElements.map(element => ({
        text: element.text,
        added: element.added
      }));
      // in that copy, change added => true/false for the correct element
      markSchemeElements[id].added = !markSchemeElements[id].added;
      // return the copied array as the new state
      return { markSchemeElements };
    });
  };

  //swipe between the case details and the mark scheme
  swipe = () => {
    this.setState(prevState => functions.swipe(prevState));
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
          exam={this.props.match.params.exam}
          stationName={this.props.match.params.station}
          submitCase={this.submitCase}
          tickDisplayed={this.state.tickDisplayed}
        />
        <div id="add-new-wrapper">
          <NewTileInput
            instructionText={"Case title"}
            userTypes={this.userTypes}
          />
          <AddNewContainer
            id="add-new-container"
            markComplete={this.markComplete}
            swipe={this.swipe}
            caseDetails={this.state.caseDetails}
            caseDetailsDisplayed={this.state.caseDetailsDisplayed}
            markSchemeElements={this.state.markSchemeElements}
            markSchemeCompleted={this.state.markSchemeCompleted}
          />
        </div>
      </React.Fragment>
    );
  }
}

NewCase.propTypes = {
  match: PropTypes.object
};
