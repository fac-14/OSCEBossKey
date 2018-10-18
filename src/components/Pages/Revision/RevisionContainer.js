/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import Hammer from "react-hammerjs";
import styled from "styled-components";

import { ActiveSwipe, InactiveSwipe } from "./SwipeBalls";
import RevisionTitle from "./RevisionTitle";

const StyledSwipeBallsDiv = styled.div`
  margin-bottom: 16px;
`;

const MarkSchemeList = styled.ul`
  width: 100%;
`;

const MarkSchemeListItem = styled.li`
  display: flex;
  margin: 4px 0;
  padding: 8px 8px;
  align-items: center;
  color: ${({ completed }) => completed && "white"};
  background-color: ${({ completed }) => (completed ? "#009f5c" : "white")};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  text-align: left;
  word-wrap: break-word;
  word-break: break-word;
`;

export default class RevisionContainer extends React.Component {
  render() {
    const markSchemeArray = this.props.markSchemeElements.map(
      (element, index) => (
        <MarkSchemeListItem
          completed={element.completed}
          key={index}
          onClick={() => this.props.markComplete(index)}
        >
          {element.text}
        </MarkSchemeListItem>
      )
    );
    return (
      <div id="revision">
        <RevisionTitle caseTitle={this.props.caseTitle} />
        <StyledSwipeBallsDiv>
          {this.props.caseDetailsDisplayed ? (
            <React.Fragment>
              <ActiveSwipe swipe={this.props.swipe} />
              <InactiveSwipe swipe={this.props.swipe} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <InactiveSwipe swipe={this.props.swipe} />
              <ActiveSwipe swipe={this.props.swipe} />
            </React.Fragment>
          )}
        </StyledSwipeBallsDiv>
        <Hammer onSwipe={this.props.swipe}>
          <div id="revision-container">
            {this.props.caseDetailsDisplayed ? (
              <p id="revision-text" data-testid="case-details">
                {this.props.caseDetails}
              </p>
            ) : (
              <MarkSchemeList data-testid="mark-scheme-list">
                {markSchemeArray}
              </MarkSchemeList>
            )}
          </div>
        </Hammer>
      </div>
    );
  }
}

RevisionContainer.propTypes = {
  markComplete: PropTypes.func,
  swipe: PropTypes.func,
  caseDetailsDisplayed: PropTypes.bool,
  caseDetails: PropTypes.string,
  caseTitle: PropTypes.string,
  markSchemeElements: PropTypes.arrayOf(PropTypes.object)
};
