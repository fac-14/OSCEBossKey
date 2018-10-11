/* eslint-disable class-methods-use-this */

import "../assets/tick-button.scss";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import tickIcon from "../assets/icons/tick-fill.svg";

export default class TickButton extends React.Component {
  render() {
    return (
      <Link to="/stats">
        <button
          id="button--tick"
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

TickButton.propTypes = {
  submitCase: PropTypes.func,
  tickDisplayed: PropTypes.bool
};
