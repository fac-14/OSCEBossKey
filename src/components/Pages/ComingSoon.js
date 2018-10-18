/* eslint-disable class-methods-use-this */

import React from "react";
import BackButton from "../TopBar/BackButton";
import PropTypes from "prop-types";

export default class ComingSoon extends React.Component {
  render() {
    return (
      <div id="topbar-container">
        <BackButton link={this.props.link} />
        <h3 id="topbar-title">Coming soon...</h3>;
      </div>
    );
  }
}

ComingSoon.propTypes = {
  link: PropTypes.string
};
