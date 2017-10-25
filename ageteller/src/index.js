import React from 'react'
import ReactDOM from 'react-dom'

//sample1
// function formatName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// const user = {
//   firstName: 'Louis',
//   lastName: 'Liao'
// };

//JSX
// const element = (
//   <h1>
//     Hi, {formatName(user)}!
//   </h1>
// );

//sample2
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

//sample3
//Components must return a single root element.
//component
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// //component
// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

//sample4
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.author.avatarUrl}
//       alt={props.author.name}
//     />)
// }
// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar author={props.author} />
//       <div className="UserInfo-name">
//         {props.author.name}
//       </div>
//     </div>

//   )
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo author={props.author}/>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />,
//   document.getElementById('root')
// );

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

function ToDoItem(props) {
  return (
    <div style={boxStyle}>
      {props.title}
    </div>
  )
}
function NewItem(props) {
  return (
    <div style={boxStyle}>
      {props.title}
      <Btn title="+"/>
    </div>
  )
}
function TaskItem(props) {
  return (
    <div style={boxStyle}>
      {props.title}
      <Btn title="x"/>

    </div>
  )
}function Btn(props) {
  return(
    <div style={btnStyle}>
    {props.title}
    </div>
  )

}



function ToDoList() {
  return (
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
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);