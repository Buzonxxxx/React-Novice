import React, { Component } from 'react';
import './InputOutput.css';

const UserInput = (props) => {
  const style = {
    border: '2px solid red'
  }
  return (
    <div>
      <input 
      style={style}
      type="text" 
      onChange={props.change} 
      value={props.currentName}/>
    </div>
  )
}
const UserOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>Hello {props.username}</p>
      <p>Hello this is p2</p>
    </div>
  )
}

class InputOutput extends Component {
  state = { username: ''}
  
  HandleEvent = (event) => {
    this.setState(
      { username: event.target.value}
    )
  }
  render() {
    return (
      <div className="App">
        <UserInput 
        change = {this.HandleEvent} 
        currentName={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username='XDDDD'/>
      </div>
    );
  }
}

export default InputOutput
