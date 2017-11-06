import React from 'react'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ['Sara', 'Cahal', 'Edite']
    }
  }

  render() {
    return (
      <div>
      <h1>Hello, {this.state.name[0]}</h1>
      <h1>Hello, {this.state.name[1]}</h1>
      <h1>Hello, {this.state.name[2]}</h1>
      </div>
    )
  }
}   
  export default Welcome