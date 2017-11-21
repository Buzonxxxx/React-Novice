import React from 'react'
import './WorldClock.css'

Date.prototype.getLocalTime = function (offset) {
  var MSEC_HOUR = 3600000; // milliseconds in an hour
  var MSEC_MIN = 60000; // milliseconds in a minute
  var utc = this.getTime() + (this.getTimezoneOffset() * MSEC_MIN);
  return utc + (offset * MSEC_HOUR);
};
Date.prototype.getOffsetByTimezone = function (timezone) {
  switch (timezone) {
    case 'Asia/Taipei': return 8.0;
    case 'Asia/Tokyo': return 9.0;
    case 'America/New_York': return -5.0;
    case 'Europe/London': return 0;
    case 'Australia/Sydney': return 10.0;
    default: return 0;
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {time: new Date};
  }
  render() {
    const t = this.props.time;
    // const t = this.state.time;
    const offset = t.getOffsetByTimezone(this.props.timezone);
    const nd = new Date(t.getLocalTime(offset));
    var h = nd.getHours();
    var m = nd.getMinutes();
    h = 270 + (h + m / 60) * 30;
    m = 270 + m * 6;
    const hCss = { transform: 'rotate(' + h + 'deg)' }
    const mCss = { transform: 'rotate(' + m + 'deg)' }
    return (
      <div className="clock">
        <div className="hour" style={hCss} />
        <div className="minute" style={mCss} />
        <div className="city">{this.props.city}</div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputTime: '2017-11-21 17:00:00' };
    this.handleInputTimeChange = this.handleInputTimeChange.bind(this)
  }
  handleInputTimeChange(e) {
    this.setState({ inputTime: e.target.value });
  }
  render() {
    const t = new Date(this.state.inputTime);
    return (
      <div>
        <input type="text" value={this.state.inputTime} onChange={this.handleInputTimeChange} />
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

export default App