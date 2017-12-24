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

const TaskItem = props =>
  <div style={boxStyle}>
    {props.title}
    <DeleteButton delete={props.delete} title="x" />
  </div>

const DeleteButton = props =>
  <div style={btnStyle} onClick={props.delete}>
    {props.title}
  </div>

const AddButton = props =>
  <div style={btnStyle} onClick={props.click}>
    {props.title}
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
      <input style={inputStyle} type="text" onChange={props.change} value={props.value} placeholder='add new task here' />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}
class SearchInput extends React.Component {

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  }
  render() {
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
      <form style={{ textAlign: 'center' }} action='#'>
        <input style={inputStyle} type="text" value={this.props.SearchValue}
          placeholder='search here' onChange={this.handleFilterTextChange} />
      </form>
    )
  }
}

let submitList = []

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskItemList: [],
      count: 0,
      value: '',
      filterText: '',
      filterArray: [],
    }
  }

  handleSubmit = (event) => {
    let value = this.state.value
    if (value === '') {
      event.preventDefault()
      return null
    }
    event.preventDefault()
    submitList.push(value)

    this.setState(
      {
        taskItemList: submitList,
        value: ''
      }
    )
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleDelete = (index, event) => {
    submitList.splice(index, 1)
    this.setState(
      {
        taskItemList: submitList,
      })
  }
  handleFilterTextChange = (filterText) => {

    this.setState(
      {
        filterText: filterText,
      })
  }

  render() {
    const filterText = this.state.filterText
    const filteredTask = this.state.taskItemList.map((task, index) => {
      const TI = <TaskItem delete={this.handleDelete.bind(this, index)} title={task} key={task.toString()} />
      if (filterText == '')
        return TI
      else if (task === filterText)
        return TI
    })
    return (
      <div>
        <ToDoItem title="To Do" />
        <Clock />
        <UserInput submit={this.handleSubmit} change={this.handleChange} value={this.state.value} />
        <SearchInput SearchValue={this.state.SearchValue} onFilterTextChange={this.handleFilterTextChange} />
        {filteredTask}
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
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default ToDoList