/* eslint-disable class-methods-use-this */

import React from "react";

export default class BackButton extends React.Component {
  render() {
    return <button onClick={() => this.props.closeCase()}>Back</button>;
  }
}
