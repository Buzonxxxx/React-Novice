import React, { Component } from "react";

class Clock extends Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const clockStyle = {
      position: "absolute",
      right: "3%",
      top: "0"
    };
    return (
      <div style={clockStyle}>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
