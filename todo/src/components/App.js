import React from "react";
import Clock from "./Clock";
import UserInput from "./UserInput";
import SearchInput from "./SearchInput";

const boxStyle = {
  width: "500px",
  height: "50px",
  lineHeight: "50px",
  margin: "10px auto",
  border: "solid blue 1px",
  textAlign: "center"
};
const btnStyle = {
  width: "50px",
  borderLeft: "solid blue 1px",
  display: "inline",
  float: "right",
  cursor: "pointer"
};

const ToDoItem = props => <div style={boxStyle}>{props.title}</div>;

const TaskItem = props => (
  <div style={boxStyle}>
    {props.title}
    <DeleteButton delete={props.delete} title="x" />
  </div>
);

const DeleteButton = props => (
  <div style={btnStyle} onClick={props.delete}>
    {props.title}
  </div>
);

let submitList = [];

class App extends React.Component {
  state = {
    taskItemList: [],
    count: 0,
    value: "",
    filterText: "",
    filterArray: []
  };

  handleSubmit = event => {
    let value = this.state.value;
    if (value === "") {
      event.preventDefault();
      return null;
    }
    event.preventDefault();
    submitList.push(value);

    this.setState({ taskItemList: submitList, value: "" });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleDelete = (index, event) => {
    submitList.splice(index, 1);
    this.setState({ taskItemList: submitList });
  };
  handleFilterTextChange = filterText => {
    this.setState({ filterText });
  };

  render() {
    const filterText = this.state.filterText;
    const filteredTask = this.state.taskItemList.map((task, index) => {
      const TI = (
        <TaskItem
          delete={this.handleDelete.bind(this, index)}
          title={task}
          key={task.toString()}
        />
      );
      if (filterText === "") return TI;
      else if (task === filterText) return TI;
      return undefined;
    });
    return (
      <div>
        <ToDoItem title="To Do" />
        <Clock />
        <UserInput
          submit={this.handleSubmit}
          change={this.handleChange}
          value={this.state.value}
        />
        <SearchInput onFilterTextChange={this.handleFilterTextChange} />
        {filteredTask}
      </div>
    );
  }
}

export default App;
