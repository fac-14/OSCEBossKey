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
    console.log("case submitted");
    airtableQuery(`/api/add-station/${this.state.station}`);
  };

  userTypes = input => {
    this.setState({ station: input });
  };

  // add new banner

  render() {
    return (
      <React.Fragment>
        <TopBar
          exam={this.state.exam}
          submitCase={this.submitTile}
          stationName={"add new"}
          tickDisplayed={true}
        />
        <div id="add-new-wrapper">
          <NewTileInput exam={this.state.exam} userTypes={this.userTypes} />
          <InstructionText text={"Add case"} />
          <AddNewBanner station={this.state.station} />
        </div>
      </React.Fragment>
    );
  }
}

AddTile.propTypes = {
  match: PropTypes.object
};
