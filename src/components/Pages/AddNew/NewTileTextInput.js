import React from "react";
import PropTypes from "prop-types";

export default class NewTileTextInput extends React.Component {
  state = {
    value: "station_name"
  };

  // handleSubmit(event) {
  //   event.preventDefault();
  // post request to database
  // {`/api/${this.props.exam}`
  // }

  handleChange = event => {
    this.props.userTypes(event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="station_name"
          onChange={this.handleChange}
          className="input"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

NewTileTextInput.propTypes = {
  exam: PropTypes.string,
  userTypes: PropTypes.func
};
