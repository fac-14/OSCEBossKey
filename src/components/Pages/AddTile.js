import React from "react";
import PropTypes from "prop-types";

import AddNewBanner from "./AddNew/AddNewBanner";
import InstructionText from "./AddNew/InstructionText";
import NewTileInput from "./AddNew/NewTileInput";
import TopBar from "../TopBar/TopBar";

export default class AddTile extends React.Component {
  state = {
    exam: this.props.match.params.exam,
    station: ""
  };

  submitTile() {
    // add station to database
    // redirect to History page
    return false;
  }

  userTypes(input) {
    return () => {
      this.setState(() => ({
        station: input
      }));
    };
  }

  // back
  // add new banner

  render() {
    return (
      <React.Fragment>
        <TopBar
          submitCase={this.submitTile}
          stationName={"add new"}
          tickDisplayed={true}
        />
        <NewTileInput exam={this.state.exam} userTypes={this.userTypes} />
        <InstructionText text={"Add case"} />
        <AddNewBanner station={this.state.station} />
      </React.Fragment>
    );
  }
}

AddTile.propTypes = {
  match: PropTypes.object
};
