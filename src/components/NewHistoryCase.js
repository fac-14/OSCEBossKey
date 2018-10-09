import React from "react";
import PropTypes from "prop-types";

export default class NewHistoryCase extends React.Component {
  render() {
    return <h1>New {this.props.match.params.station} Case Page</h1>;
  }
}

NewHistoryCase.propTypes = {
  match: PropTypes.object
};
