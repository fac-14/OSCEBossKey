import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInstructionH2 = styled.h2`
  font-family: "Roboto", Helvetica, sans-serif;
  font-weight: 700;
  margin: 0 16px 16px 16px;
`;

const InstructionText = props => (
  <StyledInstructionH2 id="revision-title">{props.text}</StyledInstructionH2>
);

InstructionText.propTypes = {
  text: PropTypes.string
};

export default InstructionText;
