/* eslint-disable class-methods-use-this */

import React from "react";
import { Link } from "react-router-dom";

export default class AddNewTile extends React.Component {
  render() {
    return (
      <Link to="/history/add/station" id="add-station">
        <div className="tile">Add New</div>
      </Link>
    );
  }
}
