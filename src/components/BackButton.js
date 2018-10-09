/* eslint-disable class-methods-use-this */

import "../assets/back-button.scss";

import React from "react";
import PropTypes from "prop-types";

// using <Link> tags allows us to make a component or HTML element into a React link -- see usage below
import { Link } from "react-router-dom";

export default class BackButton extends React.Component {
  render() {
    return (
      <Link to="/history">
        <button id="button--back">Back</button>
      </Link>
    );
  }
}

BackButton.contextTypes = {
  router: PropTypes.object
};
