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
      this.state.name.map(person => {
        return <h1 key={person} >Hello, {person}</h1>
      })
    )
  }
}

export default Welcome