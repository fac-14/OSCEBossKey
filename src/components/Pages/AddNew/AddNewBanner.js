import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class AddNewBanner extends React.Component {
  render() {
    const link =
      "/history/" + this.props.station.replace(" ", "-") + "/add-case";
    return (
      <Link to={link} id="add-case" className="banner">
        <div className="banner-text" onClick={this.props.submitStation}>
          {" "}
          Add New
        </div>
      </Link>
    );
  }
}

AddNewBanner.propTypes = {
  station: PropTypes.string,
  submitStation: PropTypes.func
};
