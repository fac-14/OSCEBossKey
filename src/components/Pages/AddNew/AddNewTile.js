/* eslint-disable class-methods-use-this */

import React from "react";
import { Link } from "react-router-dom";

const AddNewTile = () => (
  <Link to="/history/add/station" id="add-station">
    <div className="tile">Add New</div>
  </Link>
);

export default AddNewTile;
