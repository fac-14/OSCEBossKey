/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import tickIcon from "../../assets/icons/tick_white.svg";

export default class CompleteButton extends React.Component {
  render() {
    return (
      <Link to="/stats">
        <button
          id="complete"
          onClick={() => this.props.submitCase()}
          className={
            this.props.tickDisplayed ? `tick--displayed` : `tick--not-displayed`
          }
        >
          <img src={tickIcon} />
        </button>
      </Link>
    );
  }
}

CompleteButton.propTypes = {
  submitCase: PropTypes.func,
  tickDisplayed: PropTypes.bool
};
