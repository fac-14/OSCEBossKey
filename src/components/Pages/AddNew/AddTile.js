/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import AddNewBanner from "./AddNewBanner";
import InstructionText from "./InstructionText";
import NewTileInput from "./NewTileInput";
import TopBar from "../../TopBar/TopBar";

import airtableQuery from "../../../utils/fetch";
import removeWhitespace from "../../../utils/removeWhitespace";

const StyledInstructionContainer = styled.div`
  margin-top: 0px;
`;

const StyledAddNewBannerContainer = styled.div`
  margin-bottom: 16px;
`;

export default class AddTile extends React.Component {
  state = {
    exam: this.props.match.params.exam,
    station: "",
    tickDisplayed: false
  };

  submitTile = () => {
    airtableQuery(`/api/add-station/${removeWhitespace(this.state.station)}`);
  };

  userTypes = input => {
    input
      ? this.setState({ station: input, tickDisplayed: true })
      : this.setState({ station: "", tickDisplayed: false });
  };

  render() {
    return (
      <React.Fragment>
        <TopBar
          backLink={this.state.exam}
          submitCase={this.submitTile}
          stationName={"add new"}
          station={this.state.station}
          tickDisplayed={this.state.tickDisplayed}
          addNewFlow={true}
        />
        <StyledInstructionContainer>
          <NewTileInput
            instructionText={"Add station"}
            userTypes={this.userTypes}
          />
        </StyledInstructionContainer>
        <InstructionText text={"Add case"} />
        {this.state.station && (
          <StyledAddNewBannerContainer>
            <AddNewBanner
              exam={this.state.exam}
              station={this.state.station.replace(/\s/g, "-")}
              submitStation={this.submitTile}
            />
          </StyledAddNewBannerContainer>
        )}
      </React.Fragment>
    );
  }
}

AddTile.propTypes = {
  match: PropTypes.object
};
