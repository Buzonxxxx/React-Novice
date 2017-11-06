import React from 'react'

const formatDate = props => props.toLocaleDateString()
class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    }
  }
  // formatDate(props) {
  //   return props.toLocaleDateString()
  // }
  Avatar(props) {
    return  <img className="Avatar" src={props.avatarUrl} alt={props.name} />
    
  }
  UserInfo(props) {
    return (
      <div className="UserInfo">
        {this.Avatar(props)}
        <div className="UserInfo-name">
        {props.name}
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="Comment">
        {this.UserInfo(this.state.author)}
        <div className="Comment-text">
          {this.state.text}
        </div>
        <div className="Comment-date">
          {formatDate(this.state.date)}
        </div>
      </div>
    )
  }
}

export default Comment