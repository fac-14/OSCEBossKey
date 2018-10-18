/* eslint-disable class-methods-use-this */

import React from "react";
import NavBar from "../Navbar/Navbar";
import comingSoonIcon from "../../assets/icons/coming-soon-icon.svg";

export default class ComingSoon extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="icon-wrapper">
          <img id="coming-soon-icon" src={comingSoonIcon} />
        </div>
        <NavBar />
      </React.Fragment>
    );
  }
}
