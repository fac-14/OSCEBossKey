import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class AddNewBanner extends React.Component {
  render() {
    return (
      <Link
        to={`/${this.props.exam}/${this.props.station}/add-case`}
        id="add-case"
        className="banner"
      >
        <div className="banner-text" onClick={this.props.submitStation}>
          {" "}
          Add New
        </div>
      </Link>
    );
  }
}

AddNewBanner.propTypes = {
  exam: PropTypes.string,
  station: PropTypes.string,
  submitStation: PropTypes.func
};
