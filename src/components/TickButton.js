/* eslint-disable class-methods-use-this */

import "../assets/tick-button.scss";

import React from "react";
import PropTypes from "prop-types";

export default class TickButton extends React.Component {
  render() {
    return (
      <button
        id="button--tick"
        onClick={() => this.props.submitCase()}
        className={
          this.props.tickDisplayed ? `tick--displayed` : `tick--not-displayed`
        }
      >
        Ticked
      </button>
    );
  }
}

TickButton.propTypes = {
  submitCase: PropTypes.func,
  tickDisplayed: PropTypes.bool
};
