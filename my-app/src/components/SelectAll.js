import React, { Component } from "react";

class SelectAll extends Component {
  state = { checked: [false, false, false] };

  selectAll = event => {
    this.setState({
      checked: this.state.checked.map(() => event.target.checked) //select all box被按之後的狀態
    });
  };

  handleChange = (index, event) => {
    const checked = this.state.checked;
    checked[index] = event.target.checked;

    this.setState({
      checked: checked
    });
  };
  render() {
    const isAllChecked =
      this.state.checked.filter(c => c).length === this.state.checked.length;
    // 目前checked數量 === state checked數量: 3
    return (
      <div>
        <p>What can I do?</p>
        <p>
          Select All
          <input
            type="checkbox"
            onChange={this.selectAll}
            checked={isAllChecked}
          />
        </p>
        <p>
          Sleep
          <input
            type="checkbox"
            checked={this.state.checked[0]}
            onChange={this.handleChange.bind(this, 0)}
          />
          <br />
        </p>
        <p>
          Run
          <input
            type="checkbox"
            checked={this.state.checked[1]}
            onChange={this.handleChange.bind(this, 1)}
          />
          <br />
        </p>
        <p>
          Fly
          <input
            type="checkbox"
            checked={this.state.checked[2]}
            onChange={this.handleChange.bind(this, 2)}
          />
          <br />
        </p>
      </div>
    );
  }
}

export default SelectAll;
