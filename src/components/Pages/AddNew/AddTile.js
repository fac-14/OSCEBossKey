/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";

import AddNewBanner from "./AddNewBanner";
import InstructionText from "./InstructionText";
import NewTileInput from "./NewTileInput";
import TopBar from "../../TopBar/TopBar";

import airtableQuery from "../../../utils/fetch";

export default class AddTile extends React.Component {
  state = {
    exam: this.props.match.params.exam,
    station: ""
  };

  submitTile = () => {
    airtableQuery(`/api/add-station/${this.state.station}`);
  };

  userTypes = input => {
    this.setState({ station: input });
  };

  render() {
    return (
      <React.Fragment>
        <TopBar
          backLink={this.state.exam}
          submitCase={this.submitTile}
          stationName={"add new"}
          station={this.state.station}
          tickDisplayed={true}
        />
        <div id="add-new-wrapper">
          <NewTileInput
            instructionText={"Add station"}
            userTypes={this.userTypes}
          />
          <InstructionText text={"Add case"} />
          <div id="banner-wrapper">
            <AddNewBanner
              exam={this.state.exam}
              station={this.state.station.replace(/\s/g, "-")}
              submitStation={this.submitTile}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AddTile.propTypes = {
  match: PropTypes.object
};
