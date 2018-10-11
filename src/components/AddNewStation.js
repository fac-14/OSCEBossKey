/* eslint-disable class-methods-use-this */

import React from "react";
import { Link } from "react-router-dom";
import "../assets/history.scss";

export default class AddNewStation extends React.Component {
  render() {
    return (
      <Link to="/history/new-station" id="add-station">
        <div className="stations">Add Station</div>
      </Link>
    );
  }
}
