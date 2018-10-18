import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAddNewBanner = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background-color: rgba(0, 159, 92, 0.2);
  height: 74px;
  margin: 4px 0;
  width: 100%;
  text-decoration: none;
`;

const StyledAddNewBannerText = styled.div`
  font-family: "Nova Round", Helvetica, sans-serif;
  margin: 0 16px;
  color: #009f5c;
`;

export default class AddNewBanner extends React.Component {
  render() {
    return (
      <StyledAddNewBanner
        to={`/${this.props.exam}/${this.props.station}/add-case`}
      >
        <StyledAddNewBannerText onClick={this.props.submitStation}>
          {" "}
          Add New
        </StyledAddNewBannerText>
      </StyledAddNewBanner>
    );
  }
}

AddNewBanner.propTypes = {
  exam: PropTypes.string,
  station: PropTypes.string,
  submitStation: PropTypes.func
};
