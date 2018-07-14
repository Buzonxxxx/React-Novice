import React, { Component } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn1: true, 
      isToggleOn2: true
     }
  }
  handleClick1 = () => {
    this.setState(prevState => ({
      isToggleOn1: !prevState.isToggleOn1
    }))
  }

  handleClick2 = () => {
    this.setState(prevState => ({
      isToggleOn2: !prevState.isToggleOn2
    }))
  }

  render() {
    return [
        <button onClick={this.handleClick1}>
          {this.state.isToggleOn1 ? 'ON' : 'OFF'}
        </button>,
        <button onClick={this.handleClick2}>
          {this.state.isToggleOn2 ? 'ON' : 'OFF'}
        </button>
    ]
  }
}

export default Toggle