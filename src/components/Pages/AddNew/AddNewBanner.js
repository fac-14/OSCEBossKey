import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCase = styled.div`
  font-family: "Nova Round", Helvetica, sans-serif;
  background-color: rgba(0, 159, 92, 0.2);
  color: #009f5c;
  font-size: 20px;
  text-transform: uppercase;
  width: 100%;
  box-sizing: border-box;
  line-height: 1.2;
  padding: 16px;
  margin-bottom: 16px;
  border: none;
`;

export default class AddNewBanner extends React.Component {
  render() {
    return (
      <Link to={`/${this.props.exam}/${this.props.station}/add-case`}>
        <StyledCase onClick={this.props.submitStation}> Add New</StyledCase>
      </Link>
    );
  }
}

AddNewBanner.propTypes = {
  exam: PropTypes.string,
  station: PropTypes.string,
  submitStation: PropTypes.func
};
