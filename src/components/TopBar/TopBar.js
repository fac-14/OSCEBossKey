/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BackButton from "./BackButton";
import CompleteButton from "./CompleteButton";
import timerFormat from "../../utils/timerFormat";
import removeHyphens from "../../utils/removeHyphens";

const TopBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px 4px 4px;
  height: 40px;
  background-color: #c7c7b2;
  color: #fff;
  font-family: "Nova Round", Helvetica, sans-serif;
  text-transform: uppercase;
`;

const TopBarTitle = styled.h3`
  flex: 1;
  justify-content: flex-start;
`;

const TopBarTimer = styled.h3`
  width: 60px;
  color: ${({ long }) => long && "#e53d00"};
`;

export default class TopBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopBarContainer>
          <BackButton link={this.props.backLink} />
          <TopBarTitle>
            {this.props.stationName && removeHyphens(this.props.stationName)}
          </TopBarTitle>
          {this.props.timer && (
            <TopBarTimer long={this.props.time >= 600}>
              {timerFormat(this.props.time)}
            </TopBarTimer>
          )}
          {this.props.tickDisplayed && (
            <CompleteButton
              exam={this.props.backLink}
              onClick={this.props.submitCase}
              {...this.props}
            />
          )}
        </TopBarContainer>
      </React.Fragment>
    );
  }
}

TopBar.propTypes = {
  addNewFlow: PropTypes.bool,
  backLink: PropTypes.string,
  exam: PropTypes.string,
  submitCase: PropTypes.func,
  stationName: PropTypes.string,
  station: PropTypes.string,
  tickDisplayed: PropTypes.bool,
  time: PropTypes.number,
  timer: PropTypes.bool
};
