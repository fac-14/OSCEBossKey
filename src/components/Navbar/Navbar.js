import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import historyIcon from "../../assets/icons/history-black.svg";
import examinationIcon from "../../assets/icons/examinations-black.svg";
import extrasIcon from "../../assets/icons/extras-black.svg";
import statisticsIcon from "../../assets/icons/statistics-black.svg";
import styled from "styled-components";

const StyledUL = styled.ul`
  background: #c7c7b2;
  display: flex;
  width: 100vw;
  position: fixed;
  bottom: 0;
`;

const StyledLI = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 4px;
`;

const StyledText = styled.h3`
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 8px;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
`;

const Navbar = () => (
  <div>
    <StyledUL>
      <StyledLI>
        <StyledLink to="/history">
          <StyledImg src={historyIcon} />
          <StyledText>History</StyledText>
        </StyledLink>
      </StyledLI>
      <StyledLI>
        <StyledLink to="/examinations">
          <StyledImg src={examinationIcon} />
          <StyledText>Examinations</StyledText>
        </StyledLink>
      </StyledLI>
      <StyledLI>
        <StyledLink to="/extras">
          <StyledImg src={extrasIcon} />
          <StyledText>Extras</StyledText>
        </StyledLink>
      </StyledLI>
      <StyledLI>
        <StyledLink to="/stats">
          <StyledImg src={statisticsIcon} />
          <StyledText>Statistics</StyledText>
        </StyledLink>
      </StyledLI>
    </StyledUL>
  </div>
);

export default Navbar;
