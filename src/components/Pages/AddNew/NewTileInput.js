import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import InstructionText from "./InstructionText";
import NewTileTextInput from "./NewTileTextInput";

const StyledNewTileInputContainer = styled.div`
  background: blue;
  margin-bottom: 16px;
`;

export default class NewTileInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledNewTileInputContainer>
          <InstructionText text={this.props.instructionText} />
          <NewTileTextInput userTypes={this.props.userTypes} />
        </StyledNewTileInputContainer>
      </React.Fragment>
    );
  }
}

NewTileInput.propTypes = {
  instructionText: PropTypes.string,
  userTypes: PropTypes.func
};
