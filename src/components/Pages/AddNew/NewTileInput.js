import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import InstructionText from "./InstructionText";
import NewTileTextInput from "./NewTileTextInput";

const StyledNewTileInputContainer = styled.div`
  margin-bottom: 16px;
  margin-top: 100px;
`;

const NewTileInput = props => (
  <React.Fragment>
    <StyledNewTileInputContainer>
      <InstructionText text={props.instructionText} />
      <NewTileTextInput userTypes={props.userTypes} />
    </StyledNewTileInputContainer>
  </React.Fragment>
);

NewTileInput.propTypes = {
  instructionText: PropTypes.string,
  userTypes: PropTypes.func
};

export default NewTileInput;
