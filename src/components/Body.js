/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import Hammer from "react-hammerjs";
import { ActiveSwipe, InactiveSwipe } from "./SwipeBalls";
import "../assets/body.scss";

export default class Body extends React.Component {
  render() {
    {
      /* <p></p> is temporary and will be replaced with a className based on the markComplete value */
    }
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
        <div>
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
          <div>
            {this.props.caseDetailsDisplayed ? (
              <p>{this.props.caseDetails}</p>
            ) : (
              <ul data-testid="markSchemeList">{markSchemeArray}</ul>
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
