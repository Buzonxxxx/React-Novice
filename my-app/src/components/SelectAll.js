import React from 'react'

class SelectAll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [false, false, false],
    }
  }

  selectAll = event => {
    this.setState({
      checked: this.state.checked.map(function () {
        return event.target.checked //select all box被按之後的狀態
      })
    })
  }

  handleChange = (index, event) => {
    var checked = this.state.checked;
    checked[index] = event.target.checked;

    this.setState({
      checked: checked
    })
  }
  render() {
    var isAllChecked = 
    this.state.checked.filter(c => c).length === this.state.checked.length
    // 目前checked數量 === state checked數量
    return (
      <div>
        <p>What can I do?</p>
        <p>Select All
          <input type='checkbox'
            onChange={this.selectAll}
            checked={isAllChecked}
          /></p>
        <p>Sleep
          <input type='checkbox'
            checked={this.state.checked[0]}
            onChange={this.handleChange.bind(this, 0)}
          /><br /></p>
        <p>Run
          <input type='checkbox'
            checked={this.state.checked[1]}
            onChange={this.handleChange.bind(this, 1)}
          /><br /></p>
        <p>Fly
          <input type='checkbox'
            checked={this.state.checked[2]}
            onChange={this.handleChange.bind(this, 2)}
          /><br /></p>
      </div>
    )

  }
}


export default SelectAll