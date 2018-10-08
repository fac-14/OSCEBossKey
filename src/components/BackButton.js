/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

export default class BackButton extends React.Component {
  render() {
    return <button onClick={() => this.props.closeCase()}>Back</button>;
  }
}

BackButton.propTypes = {
  closeCase: PropTypes.func
};
