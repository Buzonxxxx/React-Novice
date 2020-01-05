import React, { Component } from "react";
import WorldClock from "./WorldClock";
import Clock from "./Clock";

class App extends Component {
  state = { inputTime: "2017-11-21 17:00:00" };

  onInputChange = time => {
    this.setState({ inputTime: time });
  };

  render() {
    const t = new Date(this.state.inputTime);
    return (
      <div>
        <WorldClock
          onInputChange={this.onInputChange}
          inputTime={this.state.inputTime}
        />
        <Clock timezone="Asia/Taipei" city="Taipei" time={t} />
        <Clock timezone="Asia/Tokyo" city="Tokyo" time={t} />
        <Clock timezone="America/New_York" city="New_York" time={t} />
        <Clock timezone="Europe/London" city="London" time={t} />
        <Clock timezone="Australia/Sydney" city="Sydney" time={t} />
      </div>
    );
  }
}

export default App;
