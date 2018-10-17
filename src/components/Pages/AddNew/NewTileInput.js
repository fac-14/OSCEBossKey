import React from "react";
import PropTypes from "prop-types";

import InstructionText from "./InstructionText";
import NewTileTextInput from "./NewTileTextInput";

export default class NewTileInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InstructionText text={this.props.instructionText} />
        <NewTileTextInput userTypes={this.props.userTypes} />
      </React.Fragment>
    );
  }
}

NewTileInput.propTypes = {
  instructionText: PropTypes.string,
  userTypes: PropTypes.func
};
