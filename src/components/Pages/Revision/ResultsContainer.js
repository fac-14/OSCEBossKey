/* eslint-disable class-methods-use-this */
/* eslint-disable no-invalid-this */

import React from "react";
import PropTypes from "prop-types";
import RevisionTitle from "./RevisionTitle";
import timerFormat from "../../../utils/timerFormat";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultsTitle = styled.h3`
  font-weight: 700;
  margin: 8px 0;
  text-transform: uppercase;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow-y: scroll;
`;

const RevisionList = styled.ul`
  width: 100%;
`;

const ResultItem = styled.li`
  display: flex;
  justify-content: center;
  height: 48px;
  display: flex;
  margin: 8px 0;
  padding: 8px;
  align-items: center;
  background-color: white;
`;

const HighlightedItem = styled(ResultItem)`
  font-size: 28pt;
  font-weight: 700;
  color: #009f5c;
`;

export default class ResultsContainer extends React.Component {
  render() {
    const missed = [...this.props.markSchemeElements]
      .filter(mark => !mark.completed)
      .map((mark, index) => <ResultItem key={index}>{mark.text}</ResultItem>);
    return (
      <Container>
        <RevisionTitle caseTitle={this.props.caseTitle} />
        <ResultsTitle>Results</ResultsTitle>
        <Results>
          <RevisionList>
            <HighlightedItem>
              {Math.floor(
                (this.props.markSchemeCompleted / this.props.markSchemeTotal) *
                  100
              )}
              %
            </HighlightedItem>
            <ResultItem>
              You performed {this.props.markSchemeCompleted} of{" "}
              {this.props.markSchemeTotal} tasks in{" "}
              {timerFormat(this.props.timeElapsed)}.
            </ResultItem>
          </RevisionList>
          <ResultsTitle>You missed {missed.length} items</ResultsTitle>
          <RevisionList>{missed}</RevisionList>
        </Results>
      </Container>
    );
  }
}

ResultsContainer.propTypes = {
  markSchemeCompleted: PropTypes.number,
  markSchemeTotal: PropTypes.number,
  markSchemeElements: PropTypes.arrayOf(PropTypes.object),
  caseTitle: PropTypes.string,
  timeElapsed: PropTypes.number
};
