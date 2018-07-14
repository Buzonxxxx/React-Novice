import React, { Component }from 'react'

const formatDate = props => props.toLocaleDateString()
class Comment extends Component {
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
  formatDate(props) {
    return props.toLocaleDateString()
  }

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
      <div>
        {this.UserInfo(this.state.author)}
        <div>
          {this.state.text}
        </div>
        <div>
          {formatDate(this.state.date)}
        </div>
      </div>
    )
  }
}

export default Comment