import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn1: true, 
      isToggleOn2: true
     };

    // This binding is necessary to make `this` work in the callback
    // 用arrow function, 可以不用bind
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  handleClick1() {
    this.setState(prevState => ({
      isToggleOn1: !prevState.isToggleOn1
    }));
  }

  handleClick2() {
    this.setState(prevState => ({
      isToggleOn2: !prevState.isToggleOn2
    }));
  }

  // handleClick = () => {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

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