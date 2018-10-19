/* eslint-disable class-methods-use-this */
/* eslint-disable no-invalid-this */

import React from "react";
import PropTypes from "prop-types";
import functions from "../../../utils/RevisionPage.functions";
import TopBar from "../../TopBar/TopBar";
import RevisionContainer from "./RevisionContainer";
import ResultsContainer from "./ResultsContainer";
import airtableQuery from "../../../utils/fetch";

// <Revision> :: manages state across all child components
export default class RevisionPage extends React.Component {
  state = {
    stationName: null,
    time: 0,
    intervalId: null,
    caseTitle: null,
    caseDetails: null,
    tickDisplayed: false,
    caseDetailsDisplayed: true,
    resultsDisplayed: false,
    markSchemeCompleted: 0,
    markSchemeElements: []
  };

  // when component is mounted, run (async) local API query and update state when response arrives
  // update state & begin timer when retrieved
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
        markSchemeElements: revisionList,
        intervalId: setInterval(
          () => this.setState({ time: this.state.time + 1 }),
          1000
        )
      });
    });
  }

  //log marks and progress user to feedback screen
  //todo: how do we link this into database/data store?
  submitCase = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      tickDisplayed: !this.state.tickDisplayed,
      resultsDisplayed: !this.state.resultsDisplayed
    });
  };

  //swipe between the case details and the mark scheme
  swipe = () => {
    this.setState(prevState => functions.swipe(prevState));
  };

  //mark indivual mark scheme element as completed
  markComplete = id => {
    this.setState(prevState => functions.markComplete(id, prevState));
  };

  // render resultsContainer if user has submitted, revisionContainer if not
  // note: revision container also has two displays of its own
  render() {
    const revisionContainer = (
      <RevisionContainer
        id="revision"
        markComplete={this.markComplete}
        swipe={this.swipe}
        {...this.state}
      />
    );

    const resultsContainer = (
      <ResultsContainer
        markSchemeTotal={this.state.markSchemeElements.length}
        timeElapsed={this.state.time}
        {...this.state}
      />
    );
    const { exam, station } = this.props.match.params;
    return (
      <React.Fragment>
        <TopBar
          id="topbar"
          backLink={`${exam}/${station}`}
          submitCase={this.submitCase}
          timer
          {...this.state}
        />
        {this.state.resultsDisplayed ? resultsContainer : revisionContainer}
      </React.Fragment>
    );
  }
}

RevisionPage.propTypes = {
  match: PropTypes.object
};
