/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import Hammer from "react-hammerjs";
import { ActiveSwipe, InactiveSwipe } from "../Revision/SwipeBalls";
import InstructionText from "./InstructionText";

export default class AddNewContainer extends React.Component {
  render() {
    const markSchemeArray = this.props.markSchemeElements.map(
      (element, index) => (
        <li
          className={element.added ? "strike" : ""}
          key={index}
          onClick={() => this.props.markComplete(index)}
        >
          {element.text}
        </li>
      )
    );
    return (
      <div>
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
          <div id="add-new-container">
            {this.props.caseDetailsDisplayed ? (
              <div id="add-new-text" data-testid="new-case-details">
                <InstructionText text={"Case details"} />
                <textarea
                  onChange={this.caseDetailsChange}
                  placeholder="Add patient details"
                  max-length="5000"
                />
              </div>
            ) : (
              <ul id="add-new-list" data-testid="new-mark-scheme-list">
                {markSchemeArray}
              </ul>
            )}
          </div>
        </Hammer>
      </div>
    );
  }
}

AddNewContainer.propTypes = {
  markComplete: PropTypes.func,
  swipe: PropTypes.func,
  caseDetailsDisplayed: PropTypes.bool,
  caseDetails: PropTypes.string,
  caseTitle: PropTypes.string,
  markSchemeElements: PropTypes.arrayOf(PropTypes.object)
};
