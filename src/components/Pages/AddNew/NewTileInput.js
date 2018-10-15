import React from "react";
import PropTypes from "prop-types";

import InstructionText from "./InstructionText";
import NewTileTextInput from "./NewTileTextInput";

export default class NewTileInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InstructionText text={"Add station"} />
        <NewTileTextInput
          exam={this.props.exam}
          userTypes={this.props.userTypes}
        />
      </React.Fragment>
    );
  }
}

NewTileInput.propTypes = {
  exam: PropTypes.string,
  userTypes: PropTypes.func
};
