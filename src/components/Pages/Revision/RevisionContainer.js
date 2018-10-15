/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import Hammer from "react-hammerjs";
import { ActiveSwipe, InactiveSwipe } from "./SwipeBalls";
import RevisionTitle from "./RevisionTitle";

export default class RevisionContainer extends React.Component {
  render() {
    const markSchemeArray = this.props.markSchemeElements.map(
      (element, index) => (
        <li
          className={element.completed ? "strike" : ""}
          key={index}
          onClick={() => this.props.markComplete(index)}
        >
          {element.text}
        </li>
      )
    );
    return (
      <div id="revision">
        <RevisionTitle caseTitle={this.props.caseTitle} />
        <div id="swipe-balls">
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
        </div>
        <Hammer onSwipe={this.props.swipe}>
          <div id="revision-container">
            {this.props.caseDetailsDisplayed ? (
              <p id="revision-text" data-testid="case-details">
                {this.props.caseDetails}
              </p>
            ) : (
              <ul id="revision-list" data-testid="mark-scheme-list">
                {markSchemeArray}
              </ul>
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
  markSchemeElements: PropTypes.arrayOf(PropTypes.object)
};
