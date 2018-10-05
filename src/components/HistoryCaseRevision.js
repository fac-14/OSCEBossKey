/* eslint-disable class-methods-use-this */

import { React, Fragment } from "react";
import markComplete from "../utils/markComplete";

// <HistoryCaseRevision> :: manages state across all child components
export default class HistoryCaseRevision extends React.Component {
  state = {
    stationName: "null",
    caseTitle: "null",
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
    return true;
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
  //todo: detail what states are affected
  swipe() {
    /*
    *  set this.case.caseDetailsDisplayed = !this.case.caseDetailsDisplayed
    */
    return true;
  }

  //mark indivual mark scheme element as completed
  markComplete(id) {
    this.setState(state => markComplete(id, state));
  }

  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}
