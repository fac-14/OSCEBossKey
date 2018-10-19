/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";
import xIcon from "../../assets/icons/back.svg";

const StyledButton = styled.button`
  padding: 0 16px;
  border: none;
  background-color: transparent;
`;

const StyledImg = styled.img`
  height: 20px;
`;

const BackButton = ({ link }) => (
  <Link to={`/${link}`}>
    <StyledButton>
      <StyledImg src={xIcon} />
    </StyledButton>
  </Link>
);

BackButton.propTypes = {
  link: PropTypes.string
};

BackButton.contextTypes = {
  router: PropTypes.object
};

export default BackButton;
