/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

export default class TickButton extends React.Component {
  render() {
    return (
      <button
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
