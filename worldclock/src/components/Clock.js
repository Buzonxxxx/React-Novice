import React, { Component } from "react";
import "./WorldClock.css";

Date.prototype.getLocalTime = function(offset) {
  var MSEC_HOUR = 3600000; // milliseconds in an hour
  var MSEC_MIN = 60000; // milliseconds in a minute
  var utc = this.getTime() + this.getTimezoneOffset() * MSEC_MIN;
  return utc + offset * MSEC_HOUR;
};

class Clock extends Component {
  getOffsetByTimezone(timezone) {
    switch (timezone) {
      case "Asia/Taipei":
        return 8.0;
      case "Asia/Tokyo":
        return 9.0;
      case "America/New_York":
        return -5.0;
      case "Europe/London":
        return 0;
      case "Australia/Sydney":
        return 10.0;
      default:
        return 0;
    }
  }

  render() {
    const t = this.props.time;
    const offset = this.getOffsetByTimezone(this.props.timezone);
    const nd = new Date(t.getLocalTime(offset));
    var h = nd.getHours();
    var m = nd.getMinutes();
    h = 270 + (h + m / 60) * 30;
    m = 270 + m * 6;
    const hCss = { transform: "rotate(" + h + "deg)" };
    const mCss = { transform: "rotate(" + m + "deg)" };
    return (
      <div className="clock">
        <div className="hour" style={hCss} />
        <div className="minute" style={mCss} />
        <div className="city">{this.props.city}</div>
      </div>
    );
  }
}

export default Clock;
