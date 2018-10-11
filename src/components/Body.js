/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import Hammer from "react-hammerjs";
import { ActiveSwipe, InactiveSwipe } from "./SwipeBalls";

export default class Body extends React.Component {
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
      <div>
        <div className="swipe-balls">
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
          <div className="content-mark">
            {this.props.caseDetailsDisplayed ? (
              <p data-testid="case-details">{this.props.caseDetails}</p>
            ) : (
              <ul
                className="history--case-mark-scheme"
                data-testid="mark-scheme-list"
              >
                {markSchemeArray}
              </ul>
            )}
          </div>
        </Hammer>
      </div>
    );
  }
}

Body.propTypes = {
  markComplete: PropTypes.func,
  swipe: PropTypes.func,
  caseDetailsDisplayed: PropTypes.bool,
  caseDetails: PropTypes.string,
  markSchemeElements: PropTypes.arrayOf(PropTypes.object)
};
