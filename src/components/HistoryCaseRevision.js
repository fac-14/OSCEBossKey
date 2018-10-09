/* eslint-disable class-methods-use-this */

import React from "react";
import functions from "../utils/HistoryCaseRevision.functions";
import Header from "./Header";
import Body from "./Body";
import { stat } from "fs";

// <HistoryCaseRevision> :: manages state across all child components
export default class HistoryCaseRevision extends React.Component {
  state = {
    stationName: "Chest Pain",
    caseTitle:
      "57 year old male started feeling chest pain after drinking milk",
    caseDetails:
      "Jennifer is a 28-year-old female who reports experiencing chest pain 10 days ago while she was out walking",
    tickDisplayed: true,
    caseDetailsDisplayed: true,
    markSchemeCompleted: 0,
    markSchemeElements: [
      { text: "Introduces themselves", completed: false },
      { text: "Washes hands", completed: false },
      { text: "Confirms patient details", completed: false }
    ]
  };

  //close the case and return to main screen without logging marks
  closeCase = () => {
    /*
    * 1. render/reset component layout to station name page/cases page
    */
    console.log("CLICKED: closeCase()");
  };

  //log marks and progress user to feedback screen
  //todo: how do we link this into database/data store?
  submitCase = () => {
    /*
    * render feedback page passing this.state.markSchemeCompleted as a prop
    */
    console.log("CLICKED: submitCase()");
  };

  //swipe between the case details and the mark scheme
  swipe = () => {
    this.setState(prevState => functions.swipe(prevState));
  };

  //mark indivual mark scheme element as completed
  markComplete = id => {
    this.setState(prevState => functions.markComplete(id, prevState));
  };

  render() {
    return (
      <React.Fragment>
        <Header
          stationName={this.state.stationName}
          caseTitle={this.state.caseTitle}
          submitCase={this.submitCase}
          tickDisplayed={this.state.tickDisplayed}
          closeCase={this.closeCase}
        />
        <Body
          markComplete={this.markComplete}
          swipe={this.swipe}
          caseDetails={this.state.caseDetails}
          caseDetailsDisplayed={this.state.caseDetailsDisplayed}
          markSchemeElements={this.state.markSchemeElements}
          markSchemeCompleted={this.state.markSchemeCompleted}
        />
      </React.Fragment>
    );
  }
}
