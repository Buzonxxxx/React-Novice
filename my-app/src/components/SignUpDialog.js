import React from 'react'

const Dialog = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      {props.children}
    </div>
  )
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: '' }
  }

  handleChange = (e) => this.setState({ login: e.target.value })
  handleSignUp = () => alert(`Welcome on board, ${this.state.login}!`)

  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    )
  }


}


export default SignUpDialog
