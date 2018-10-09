import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class AddNewCase extends React.Component {
  render() {
    const link =
      "/history/" + this.props.station.replace(" ", "-") + "/add-case";
    return (
      <Link to={link}>
        <div>Add Case</div>
      </Link>
    );
  }
}

AddNewCase.propTypes = {
  station: PropTypes.string
};
