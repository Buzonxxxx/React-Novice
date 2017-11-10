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
const NewItem = props =>
  <div style={boxStyle}>
    {props.title}
    <AddButton click={props.click} title="+" />
  </div>

const UserInput = props => {
  const inputStyle = {
    'width': '500px',
    'display': 'inline-block',
    'height': '50px',
    // 'width': '40%',
    'border': 'solid blue 1px',
    // 'border': '1px solid rgba(255,255,255,0.6)',
    'background': 'linear-gradient(#eee, #fff)',
    // 'transition': 'all 0.3s ease-out',
    // 'box-shadow': 'inset 0 1px 4px rgba(0,0,0,0.4)',
    // 'padding': '5px',
    // '-moz-box-sizing': 'border-box',
    // 'box-sizing': 'border-box',
  	'text-align': 'center',
    'font-size':'20px'
  }
  const spanStyle = {
    'display': 'inline-block',
    'width':'30%',
  }
  return(
<div> 
  <span style={spanStyle}></span>
  <input 
  style={inputStyle} 
  type ="text"
   >
  </input>
  </div>
  )
}

const TaskItem = props => <div style={boxStyle}>{props.title}<DeleteButton title="x" /></div>
const DeleteButton = props => <div style={btnStyle}>{props.title}</div>
const AddButton = props =>
  <div style={btnStyle} onClick={props.click}>
    {props.title}
  </div>

let newList = []

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tastItem: [1, 2, 3, 4, 5, 6, 7, 8],
      list: [],
      count: 0
    }
  }

  HandleAdd = () => {
    const count = this.state.count
    newList.push(count + 1)
    this.setState(
      {
        list: newList,
        count: count + 1
      })
  }

  render() {
    const counterStyle = {
      'text-align': 'center'
    }
    return (
      <div>
        <ToDoItem title="To Do" />
        <Clock />
        <NewItem title="New" click={this.HandleAdd}/>
        <h1 style={counterStyle}>{`${this.state.list}`}</h1>
        <UserInput/>
        {this.state.tastItem.map(task => {
          return <TaskItem title={`Task${task}`} />
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