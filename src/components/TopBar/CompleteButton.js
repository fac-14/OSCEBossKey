/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import tickIcon from "../../assets/icons/tick_white.svg";

export default class CompleteButton extends React.Component {
  render() {
    return (
      <button
        id="complete"
        onClick={() => this.props.submitCase()}
        className={
          this.props.tickDisplayed ? `tick--displayed` : `tick--not-displayed`
        }
      >
        <img src={tickIcon} />
      </button>
    );
  }
}

CompleteButton.propTypes = {
  submitCase: PropTypes.func,
  tickDisplayed: PropTypes.bool
};
