/* eslint-disable class-methods-use-this */

import React from "react";
import markComplete from "../utils/markComplete";
import Header from "./Header";
import Body from "./Body";

// <HistoryCaseRevision> :: manages state across all child components
export default class HistoryCaseRevision extends React.Component {
  state = {
    stationName: "Chest Pain",
    caseTitle:
      "57 year old male started feeling chest pain after drinking milk",
    caseDetails: "null",
    tickDisplayed: true,
    caseDetailsDisplayed: true,
    markSchemeCompleted: 0,
    markSchemeElements: [
      { text: "string", completed: false },
      { text: "string2", completed: true }
    ]
  };

  //close the case and return to main screen without logging marks
  closeCase() {
    /*
    * 1. render/reset component layout to station name page/cases page
    */
  }

  //log marks and progress user to feedback screen
  //todo: how do we link this into database/data store?
  submitCase() {
    /*
    * render feedback page passing this.state.markSchemeCompleted as a prop
    */
    return true;
  }

  //swipe between the case details and the mark scheme
  swipe() {
    return this.setState(state => ({
      caseDetailsDisplayed: !state.caseDetailsDisplayed
    }));
  }

  //mark indivual mark scheme element as completed
  markComplete(id) {
    this.setState(state => markComplete(id, state));
  }

  render() {
    return (
      <React.Fragment>
        <Header
          stationName={this.state.stationName}
          caseTitle={this.state.caseTitle}
          tickDisplayed={this.state.tickDisplayed}
        />
        <Body
          caseDetails={this.state.caseDetails}
          caseDetailsDisplayed={this.state.caseDetailsDisplayed}
          markSchemeElements={this.state.markSchemeElements}
          markSchemeCompleted={this.state.markSchemeCompleted}
        />
      </React.Fragment>
    );
  }
}
