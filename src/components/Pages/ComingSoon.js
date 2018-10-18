/* eslint-disable class-methods-use-this */

import React from "react";
import BackButton from "../TopBar/BackButton";
import comingSoonIcon from "../../assets/icons/coming-soon-icon.svg";
import PropTypes from "prop-types";

export default class ComingSoon extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="topbar-container">
          <BackButton link={this.props.link} />
          <h3 id="topbar-title">Coming soon...</h3>
        </div>
        <div id="icon-wrapper">
          <img id="coming-soon-icon" src={comingSoonIcon} />
        </div>
      </React.Fragment>
    );
  }
}

ComingSoon.propTypes = {
  link: PropTypes.string
};
