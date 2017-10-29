import React from 'react'
import ReactDOM from 'react-dom'

//sample1
// const formatName = props => `Hi, ${props.firstName} ${props.lastName}!`
// const user = {
//   firstName: 'Louis',
//   lastName: 'Liao'
// }

// // JSX
// const element = (
//   <h1>
//     {formatName(user)}
//   </h1>
// )

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   )


//sample2
// const tick = () => {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000);

//sample3
// Components must return a single root element.
// component
// const Welcome = props => <h1>Hello, {props.name}</h1>

// //component
// const App = () => (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   )

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// sample4
// const formatDate = date => date.toLocaleDateString()
// const Avatar = props => <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
// const UserInfo = props => (
//     <div className="UserInfo">
//       <Avatar author={props.author} />
//       <div className="UserInfo-name">
//         {props.author.name}
//       </div>
//     </div>
//   )
// const Comment = props => (
//     <div className="Comment">
//       <UserInfo author={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   )

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// }
// 
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />,
//   document.getElementById('root')
// )

//exercise1
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

const ToDoItem = props => <div style={boxStyle}>{props.title}</div>
const NewItem = props => <div style={boxStyle}>{props.title}<Button title="+"/></div>
const TaskItem = props => <div style={boxStyle}>{props.title}<Button title="x"/></div>
const Button = props => <div style={btnStyle}>{props.title}</div>
const ToDoList = () => (
    <div>
      <ToDoItem title="To Do"/>
      <NewItem  title="New"/>
      <TaskItem title="Task 1"/>
      <TaskItem title="Task 2"/>
      <TaskItem title="Task 3"/>
      <TaskItem title="Task 4"/>
      <TaskItem title="Task 5"/>
    </div>
  )

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);