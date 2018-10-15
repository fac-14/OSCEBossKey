/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import functions from "../../../utils/HistoryCaseRevision.functions";
import TopBar from "../../TopBar/TopBar";
import RevisionContainer from "./RevisionContainer";
import dummyData from "../../../utils/dummy-data.json";
import airtableQuery from "../../../utils/fetch";

// <Revision> :: manages state across all child components
export default class RevisionPage extends React.Component {
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
    airtableQuery(`/api/history/${station}/case/${caseid}`).then(res => {
      const { title, details, mark_scheme } = res.payload;
      const revisionList = mark_scheme.map(listElement => ({
        text: listElement,
        completed: false
      }));
      this.setState({
        stationName: station,
        caseTitle: title,
        caseDetails: details,
        markSchemeElements: revisionList
      });
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
        <TopBar
          id="topbar"
          stationName={this.state.stationName}
          submitCase={this.submitCase}
          tickDisplayed={this.state.tickDisplayed}
        />
        <RevisionContainer
          id="revision"
          markComplete={this.markComplete}
          swipe={this.swipe}
          caseTitle={this.state.caseTitle}
          caseDetails={this.state.caseDetails}
          caseDetailsDisplayed={this.state.caseDetailsDisplayed}
          markSchemeElements={this.state.markSchemeElements}
          markSchemeCompleted={this.state.markSchemeCompleted}
        />
      </React.Fragment>
    );
  }
}

RevisionPage.propTypes = {
  match: PropTypes.object
};
