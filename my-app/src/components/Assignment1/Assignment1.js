import React, { Component } from 'react';
import './Assignment1.css';

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

class App extends Component {
  state = { username: 'Louis Liao'}
  constructor(){
    super()
    // this.HandleEvent = this.HandleEvent.bind(this)
  }

  
  HandleEvent = (event) => {
    this.setState(
      { username: event.target.value}
    )
  }
  render() {
    return (
      <div className="App">
        {/* <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol> */}
        <UserInput change = {this.HandleEvent} 
        currentName={this.state.username}/>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username='XDDDD'/>
      </div>
    );
  }
}

export default App;
