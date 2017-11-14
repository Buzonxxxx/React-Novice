import React from 'react'

const boxStyle = {
  'width': '500px',
  'height': '50px',
  'lineHeight': '50px',
  'margin': '10px auto',
  'border': 'solid blue 1px',
  'textAlign': 'center',
};
const btnStyle = {
  'width': '50px',
  'borderLeft': 'solid blue 1px',
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
const NewItem = props =>
  <div style={boxStyle}>
    {props.title}
    <AddButton click={props.click} title="+" />
  </div>

const UserInput = props => {
  const inputStyle = {
    'width': '500px',
    'lineHeight': '50px',
    'border': 'solid blue 1px',
    'margin': '10px auto',
    'background': 'linear-gradient(#eee, #fff)',
    'textAlign': 'center',
    'fontSize': '20px'
  }

  return (
    <form style={{ textAlign: 'center' }} onSubmit={props.submit}>
      <input style={inputStyle} type="text" onChange={props.change} />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

const TaskItem = props => <div style={boxStyle}>{props.title}<DeleteButton title="x" /></div>
const DeleteButton = props => <div style={btnStyle}>{props.title}</div>
const AddButton = props => <div style={btnStyle} onClick={props.click}>{props.title}</div>

let addList = []
let submitList = []

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskItem: [],
      count: 0,
      value: ''
    }
  }

  handleSubmit = (event) => {
    let value = this.state.value
    event.preventDefault()
    submitList.push(value)
    this.setState(
      {
        taskItem: submitList,
      }
    )
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleAdd = () => {
    const count = this.state.count
    addList.push(count + 1)
    this.setState(
      {
        taskItem: addList,
        count: count + 1
      })
  }

  render() {
    return (
      <div>
        <ToDoItem title="To Do" />
        <Clock />
        <NewItem title="New" click={this.handleAdd} />
        <UserInput submit={this.handleSubmit} change={this.handleChange} />
        {this.state.taskItem.map(task => {
          return <TaskItem title={task} />
        })}
      </div>
    )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <div style={clockStyle}>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default ToDoList