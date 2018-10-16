/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

// using <Link> tags allows us to make a component or HTML element into a React link -- see usage below
import { Link } from "react-router-dom";
import xIcon from "../../assets/icons/back.svg";

export default class BackButton extends React.Component {
  render() {
    return (
      <Link to={`/${this.props.link}`}>
        <button id="back">
          <img src={xIcon} />
        </button>
      </Link>
    );
  }
}

BackButton.propTypes = {
  link: PropTypes.string
};

BackButton.contextTypes = {
  router: PropTypes.object
};
