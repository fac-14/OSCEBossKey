/* eslint-disable class-methods-use-this */

import React from "react";
import BackButton from "../TopBar/BackButton";

export default class ComingSoon extends React.Component {
  render() {
    return (
      <div id="topbar-container">
        <BackButton link="history" />
        <h3 id="topbar-title">Coming soon...</h3>;
      </div>
    );
  }
}
