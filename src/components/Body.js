/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

export default class Body extends React.Component {
  render() {
    const markSchemeArray = this.props.markSchemeElements.map(
      (element, index) => (
        <li key={index} onClick={() => this.props.markComplete(index)}>
          {element.text} <p>{element.completed.toString()}</p>
        </li>
      )
    );
    return (
      <div>
        {/* replace button with swipe event (relates #65) */}
        <button data-testid="swipeButton" onClick={this.props.swipe}>
          swipe
        </button>
        <div>
          {this.props.caseDetailsDisplayed ? (
            <p>{this.props.caseDetails}</p>
          ) : (
            <ul data-testid="markSchemeList">{markSchemeArray}</ul>
          )}
        </div>
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
