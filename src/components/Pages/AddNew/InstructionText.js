import React from "react";
import PropTypes from "prop-types";

export default class InstructionText extends React.Component {
  render() {
    return <h2 id="revision-title">{this.props.text}</h2>;
  }
}

InstructionText.propTypes = {
  text: PropTypes.string
};
