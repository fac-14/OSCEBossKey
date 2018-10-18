/* eslint-disable class-methods-use-this */

import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import Title from "./Title";
import AddNew from "../Pages/AddNew/AddNewBanner";
import Navbar from "../Navbar/Navbar";

import removeHyphens from "../../utils/removeHyphens";

import airtableQuery from "../../utils/fetch";

const Banner = styled.div`
  display: flex;
  align-items: center;
  background-color: #009f5c;
  height: 74px;
  width: 100%;
  font-family: "Roboto", Helvetica, sans-serif;
  line-height: 1.2;
`;

const BannerText = styled.p`
  padding: 0 16px;
  color: #fff;
`;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 4px 0;
  width: 100%;
  text-decoration: none;
`;

class CasesPage extends React.Component {
  state = {
    station: this.props.match.params.station,
    cases: []
  };

  componentDidMount() {
    airtableQuery(`/api/history/${this.state.station}`).then(res => {
      this.setState(() => ({
        cases: res.payload
      }));
    });
  }

  render() {
    const caseBanners = this.state.cases.map((banner, index) => (
      <StyledLink
        key={index}
        to={`/history/${this.state.station}/case/${banner.id}`}
      >
        <Banner key={index}>
          <BannerText>{banner.title}</BannerText>
        </Banner>
      </StyledLink>
    ));
    return (
      <React.Fragment>
        <Title
          stationName={this.state.station && removeHyphens(this.state.station)}
        />
        <BannerWrapper>
          <AddNew exam="history" station={this.state.station} />
          {caseBanners}
        </BannerWrapper>
        <Navbar />
      </React.Fragment>
    );
  }
}

CasesPage.propTypes = {
  match: PropTypes.object
};

export default withRouter(CasesPage);
