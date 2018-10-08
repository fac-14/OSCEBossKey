/* eslint-disable class-methods-use-this */

import React from "react";

export default class CaseTitle extends React.Component {
  render() {
    return <h2>{this.props.caseTitle}</h2>;
  }
}
