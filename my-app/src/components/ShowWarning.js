import React, { Component } from 'react'

const WarningBanner = ({ warn }) => !warn? null : <div>Warning!</div>

class ShowWarning extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true }
  }

  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

export default ShowWarning