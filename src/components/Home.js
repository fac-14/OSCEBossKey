import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <Link to="history/chest-pain">Chest Pain</Link>
      </React.Fragment>
    );
  }
}
