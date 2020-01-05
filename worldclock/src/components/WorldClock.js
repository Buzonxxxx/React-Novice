import React, { Component } from "react";
import Clock from "./Clock";

class WorldClock extends Component {
  state = { inputTime: "2017-11-21 17:00:00" };

  handleInputTimeChange = e => {
    this.setState({ inputTime: e.target.value });
  };
  render() {
    const t = new Date(this.state.inputTime);
    return (
      <div>
        <input
          type="text"
          value={this.state.inputTime}
          onChange={this.handleInputTimeChange}
        />
        <div>{t.toString()}</div>

        <Clock timezone="Asia/Taipei" city="Taipei" time={t} />
        <Clock timezone="Asia/Tokyo" city="Tokyo" time={t} />
        <Clock timezone="America/New_York" city="New_York" time={t} />
        <Clock timezone="Europe/London" city="London" time={t} />
        <Clock timezone="Australia/Sydney" city="Sydney" time={t} />
      </div>
    );
  }
}

export default WorldClock;
