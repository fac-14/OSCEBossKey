/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import tickIcon from "../../assets/icons/tick_white.svg";
import { Link } from "react-router-dom"; /* eslint-disable-line */

export default class CompleteButton extends React.Component {
  render() {
    const { onClick, exam, station } = this.props;
    let component;
    if (this.props.addNewFlow) {
      component = (
        <Link to={`/${exam}/${station}`}>
          <button
            id="complete"
            data-testid="complete"
            onClick={() => onClick()}
          >
            <img src={tickIcon} />
          </button>
        </Link>
      );
    } else {
      component = (
        <button id="complete" data-testid="complete" onClick={() => onClick()}>
          <img src={tickIcon} />
        </button>
      );
    }

    return component;
  }
}

CompleteButton.propTypes = {
  addNewFlow: PropTypes.bool,
  exam: PropTypes.string,
  station: PropTypes.string,
  onClick: PropTypes.func
};
