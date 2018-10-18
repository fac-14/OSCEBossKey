/* eslint-disable class-methods-use-this */

import React from "react";
import NavBar from "../Navbar/Navbar";
import comingSoonIcon from "../../assets/icons/coming-soon-icon.svg";
import styled from "styled-components";

const ComingSoonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100vw;
  margin: 64px 0;
`;

const ComingSoonImg = styled.img`
  width: 80%;
  max-height: 100%;
`;

export default class ComingSoon extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ComingSoonDiv>
          <ComingSoonImg id="coming-soon-icon" src={comingSoonIcon} />
        </ComingSoonDiv>
        <NavBar />
      </React.Fragment>
    );
  }
}
