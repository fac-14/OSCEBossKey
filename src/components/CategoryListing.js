/* eslint-disable class-methods-use-this */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./Navbar/Navbar";

import airtableQuery from "../utils/fetch";
import removeHyphens from "../utils/removeHyphens";

const Name = styled.p`
  overflow-wrap: break-word;
  overflow: hidden;
`;

const Tile = styled.div`
  display: flex;
  height: 133px;
  color: ${props => props.color || "#fff"};
  font-family: "Nova Round", Helvetica, sans-serif;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  margin: 0 8px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
  justify-items: center;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  max-width: 100vw;
`;

const StyledLink = styled(Link)`
  width: 100%;
  background-color: ${props => props.bgColour || "#009f5c"};
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export default class CategoryListing extends React.Component {
  state = {
    stations: []
  };

  componentDidMount() {
    // two requests so that it fetches the new data from a recent POST request
    // this is terrible and I'm sorry
    airtableQuery(`/api/${this.props.section}/`).then(
      airtableQuery(`/api/${this.props.section}/`).then(res => {
        this.setState(() => ({ stations: res.payload }));
      })
    );
  }

  generateLink(name) {
    if (this.props.section === "history")
      return `/${this.props.section}/${name}`;
    return `/coming-soon`;
  }

  render() {
    this.generateLink();
    const stationTiles = this.state.stations.map((tile, index) => (
      <StyledLink
        bgColour={this.props.bg}
        key={index}
        to={this.generateLink(tile)}
      >
        <Tile key={index}>
          <Name>{removeHyphens(tile)}</Name>
        </Tile>
      </StyledLink>
    ));
    const addNew = (
      <StyledLink
        bgColour={this.props.fadedBg}
        to={this.generateLink("add/station")}
        id="add-station"
      >
        <Tile color={this.props.bg}>
          <Name>Add New</Name>
        </Tile>
      </StyledLink>
    );
    return (
      <React.Fragment>
        <h1 id="title">{this.props.section}</h1>
        <Wrapper>
          {addNew}
          {stationTiles}
        </Wrapper>
        <Navbar />
      </React.Fragment>
    );
  }
}

CategoryListing.propTypes = {
  section: PropTypes.string,
  bg: PropTypes.string,
  fadedBg: PropTypes.string
};
