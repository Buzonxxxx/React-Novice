import React from 'react'

const Hello = props => <h1>Hi, {props.firstName} {props.lastName}!</h1>
class Greeting extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     firstName: 'Louis',
  //     lastName: 'Liao'
  //   }
  // }

  render() {
    return (
      // <h1>Hi, {this.state.firstName} {this.state.lastName}!</h1>
      <div>
      <Hello firstName='Louis' lastName ='Liao'/>
      </div>
    )
  }
}

export default Greeting