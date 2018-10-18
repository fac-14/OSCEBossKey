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

const CaseList = styled.ul`
  width: 100%;
`;

const CaseListItem = styled.li`
  display: flex;
  margin: 4px 0;
  padding: 16px;
  align-items: center;
  color: white;
  background-color: #009f5c;
  text-align: left;
  word-wrap: break-word;
  word-break: break-word;
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
      <Link key={index} to={`/history/${this.state.station}/case/${banner.id}`}>
        <CaseListItem key={index}>{banner.title}</CaseListItem>
      </Link>
    ));
    return (
      <React.Fragment>
        <Title
          stationName={this.state.station && removeHyphens(this.state.station)}
        />
        <div id="banner-wrapper">
          <AddNew exam="history" station={this.state.station} />
          <CaseList>{caseBanners}</CaseList>
        </div>
        <Navbar />
      </React.Fragment>
    );
  }
}

CasesPage.propTypes = {
  match: PropTypes.object
};

export default withRouter(CasesPage);
