import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NewTileTextInputForm = styled.form`
  padding: 0 16px 16px 16px;
`;

const NewTileTextInputElement = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: solid black 2px;
  font-size: 20px;
  font-family: "Roboto", Helvetica, sans-serif;
  line-height: 1.2;
  letter-spacing: 1px;

  :focus {
    outline-color: #c7c7b2;
  }
`;

export default class NewTileTextInput extends React.Component {
  state = {
    value: "station_name"
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange = event => {
    this.props.userTypes(event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <NewTileTextInputForm onSubmit={this.handleSubmit}>
        <NewTileTextInputElement
          autocomplete="off"
          type="text"
          name="station_name"
          onChange={this.handleChange}
          className="input"
          autofocus="autofocus"
        />
      </NewTileTextInputForm>
    );
  }
}

NewTileTextInput.propTypes = {
  userTypes: PropTypes.func
};
