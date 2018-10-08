/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

export default class Body extends React.Component {
  render() {
    const markSchemeArray = this.props.markSchemeElements.map((element, i) => (
      <li key={i}> {element.text} </li>
    ));

    console.log("array:", markSchemeArray);
    console.log("text in each object:", markSchemeArray.text);
    return (
      <div>
        <button onClick={this.props.swipe}>swipe</button>
        <div>
          {/*if caseDetailsDisplayed: true - render() case details*/}
          {this.props.caseDetailsDisplayed ? (
            <p>{this.props.caseDetails}</p>
          ) : (
            <ul>{markSchemeArray}</ul>
          )}
          {/*else render() markSchemeElements [{}, {}, {}]*/}
        </div>
      </div>
    );
  }
}

Body.propTypes = {
  swipe: PropTypes.func,
  caseDetailsDisplayed: PropTypes.bool,
  caseDetails: PropTypes.string,
  markSchemeElements: PropTypes.arrayOf(PropTypes.object)
};
