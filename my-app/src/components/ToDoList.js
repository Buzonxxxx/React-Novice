import React from 'react'

const boxStyle = {
  'width': '500px',
  'height': '50px',
  'line-height': '50px',
  'margin': '10px auto',
  'border': 'solid blue 1px',
  'text-align': 'center',
};
const btnStyle = {
  'width': '50px',
  'border-left': 'solid blue 1px',
  'display': 'inline',
  'float': 'right',
  'cursor': 'pointer',
};
const clockStyle = {
  'position': 'absolute',
  'right': '3%',
  'top': '0',
};

const ToDoItem = props => <div style={boxStyle}>{props.title}</div>
const NewItem = props => <div style={boxStyle}>{props.title}<Button title="+" /></div>
const TaskItem = props => <div style={boxStyle}>{props.title}<Button title="x" /></div>
const Button = props => <div style={btnStyle}>{props.title}</div>

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ToDoItem title="To Do" />
        <Clock />
        <NewItem title="New" />
        <TaskItem title="Task 1" />
        <TaskItem title="Task 2" />
        <TaskItem title="Task 3" />
        <TaskItem title="Task 4" />
        <TaskItem title="Task 5" />
      </div>
    )
  }
}

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(),1000)
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({date: new Date()})
  }

  render() {
    return (
      <div style={clockStyle}>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default ToDoList