/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import Hammer from "react-hammerjs";
import styled from "styled-components";

import { ActiveSwipe, InactiveSwipe } from "../Revision/SwipeBalls";
import InstructionText from "./InstructionText";

const MarkSchemeList = styled.ul`
  width: 100%;
`;

const MarkSchemeListItem = styled.li`
  height: 48px;
  display: flex;
  margin: 8px 0;
  padding: 8px;
  align-items: center;
  background-color: white;
`;

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
        <MarkSchemeListItem
          className={element.added ? "added" : ""}
          key={index}
          onClick={() => this.props.markComplete(index)}
        >
          {element.text}
        </MarkSchemeListItem>
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
                  onChange={this.props.caseDetailsChange}
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
                <MarkSchemeList
                  id="add-new-list"
                  data-testid="new-mark-scheme-list"
                >
                  {markSchemeArray}
                </MarkSchemeList>
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
  caseDetailsChange: PropTypes.func,
  caseDetailsDisplayed: PropTypes.bool,
  caseDetails: PropTypes.string,
  caseTitle: PropTypes.string,
  markSchemeElements: PropTypes.arrayOf(PropTypes.object),
  newMarkSchemeElement: PropTypes.func
};
