import React, { Component } from "react";
import ReactDOM from "react-dom";
import WorldClock from "./components/WorldClock";

class App extends Component {
  render() {
    return <WorldClock />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
