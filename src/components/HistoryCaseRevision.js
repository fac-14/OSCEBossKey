/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import functions from "../utils/HistoryCaseRevision.functions";
import Header from "./Header";
import Body from "./Body";
import dummyData from "../utils/dummy-data.json";
import "../assets/history-case-revision.scss";

// <HistoryCaseRevision> :: manages state across all child components
export default class HistoryCaseRevision extends React.Component {
  state = {
    stationName: null,
    caseTitle: null,
    caseDetails: null,
    tickDisplayed: false,
    caseDetailsDisplayed: true,
    markSchemeCompleted: 0,
    markSchemeElements: []
  };

  componentDidMount() {
    const { station, caseid } = this.props.match.params;
    const markScheme = dummyData.history[station][caseid]["mark-scheme"].map(
      element => ({ text: element, completed: false })
    );
    this.setState({
      stationName: station,
      caseTitle: dummyData.history[station][caseid].title,
      caseDetails: dummyData.history[station][caseid].details,
      markSchemeElements: markScheme
    });
  }

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
          className="header"
          stationName={this.state.stationName}
          caseTitle={this.state.caseTitle}
          submitCase={this.submitCase}
          tickDisplayed={this.state.tickDisplayed}
        />
        <Body
          className="body"
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

HistoryCaseRevision.propTypes = {
  match: PropTypes.object
};
