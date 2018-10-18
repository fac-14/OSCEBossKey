/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import tickIcon from "../../assets/icons/tick_white.svg";
import { Link } from "react-router-dom"; /* eslint-disable-line */

// <CompleteButton> :: can be called in two ways:
// 1. As an onClick() (used by <RevisionPage>)
// 2. As a <Link to> using /this.props.exam/this.props.station (used by <AddTile> and <NewCase>)
export default class CompleteButton extends React.Component {
  render() {
    const { onClick, exam, station } = this.props;
    const link = !onClick ? `/${exam}/${station}` : ``;
    return (
      <React.Fragment>
        {link && `<Link to=${link}>`}
        <button id="complete" data-testid="complete" onClick={() => onClick()}>
          <img src={tickIcon} />
        </button>
        {link && `</Link>`}
      </React.Fragment>
    );
  }
}

CompleteButton.propTypes = {
  exam: PropTypes.string,
  station: PropTypes.string,
  onClick: PropTypes.func
};
