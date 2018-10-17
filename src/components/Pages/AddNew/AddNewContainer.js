/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import Hammer from "react-hammerjs";
import { ActiveSwipe, InactiveSwipe } from "../Revision/SwipeBalls";
import InstructionText from "./InstructionText";

export default class AddNewContainer extends React.Component {
  state = {
    newMarkSchemeElement: ""
  };

  handleChange = event => {
    this.setState({ newMarkSchemeElement: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target["new-mark-scheme-element"].value = "";
    this.props.newMarkSchemeElement(this.state.newMarkSchemeElement);
  };

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
              // user input
              <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="new-mark-scheme-element"
                    placeholder="add new"
                    onChange={this.handleChange}
                  />
                  <input type="submit" value="&#43;" />
                </form>
                <ul id="add-new-list" data-testid="new-mark-scheme-list">
                  {markSchemeArray}
                </ul>
              </React.Fragment>
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
  markSchemeElements: PropTypes.arrayOf(PropTypes.object),
  newMarkSchemeElement: PropTypes.func
};
