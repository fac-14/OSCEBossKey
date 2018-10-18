/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import tickIcon from "../../assets/icons/tick_white.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0 0 0 16px;
  border: none;
  background-color: transparent;
`;

const StyledImg = styled.img`
  height: 20px;
`;

export default class CompleteButton extends React.Component {
  render() {
    const { onClick, exam, station } = this.props;
    let component;
    if (this.props.addNewFlow) {
      component = (
        <Link to={`/${exam}/${station}`}>
          <StyledButton data-testid="complete" onClick={() => onClick()}>
            <StyledImg src={tickIcon} />
          </StyledButton>
        </Link>
      );
    } else {
      component = (
        <StyledButton data-testid="complete" onClick={() => onClick()}>
          <StyledImg src={tickIcon} />
        </StyledButton>
      );
    }

    return component;
  }
}

CompleteButton.propTypes = {
  addNewFlow: PropTypes.bool,
  exam: PropTypes.string,
  station: PropTypes.string,
  onClick: PropTypes.func
};
