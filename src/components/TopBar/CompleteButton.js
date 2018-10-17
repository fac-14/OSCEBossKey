/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import tickIcon from "../../assets/icons/tick_white.svg";

export default class CompleteButton extends React.Component {
  render() {
    return (
      <Link to={`/${this.props.exam}`}>
        <button
          id="complete"
          data-testid="complete"
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
  exam: PropTypes.string,
  submitCase: PropTypes.func,
  tickDisplayed: PropTypes.bool
};
