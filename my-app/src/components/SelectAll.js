import React from 'react'

class SelectAll extends React.Component {
  render() {
    return (
      <div>
        <p>What can I do?</p>
        <form>
          Select All
        <input type='checkbox' />
          <br />
          Sleep
        <input type='checkbox' />
          <br />
          Run
        <input type='checkbox' />
          <br />
          Fly
        <input type='checkbox' />
        </form>
      </div>
    )

  }
}


export default SelectAll