/* eslint-disable class-methods-use-this */

import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Title from "./Title";
import AddNew from "../Pages/AddNew/AddNewBanner";
import Navbar from "../Navbar/Navbar";

import removeHyphens from "../../utils/removeHyphens";

import airtableQuery from "../../utils/fetch";

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
        <div className="banner" key={index}>
          <p className="banner-text">{banner.title}</p>
        </div>
      </Link>
    ));
    return (
      <React.Fragment>
        <Title stationName={removeHyphens(this.state.station)} />
        <div id="banner-wrapper">
          <AddNew station={this.state.station} />
          {caseBanners}
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
