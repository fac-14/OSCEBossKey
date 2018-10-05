import React from "react";
import HistoryCaseRevision from "./HistoryCaseRevision";

class App extends React.Component {
  state = {
    test: true
  };
  render() {
    return (
      <HistoryCaseRevision testing={this.state.test}>
        Hello World
      </HistoryCaseRevision>
    );
  }
}

export default App;
