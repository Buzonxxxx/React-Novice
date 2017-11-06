import React, { Component } from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'

const Style = {
  'padding': '5%',
  'text-align': 'center',
  'font-size': '16px',
};

class AgeTeller extends Component {
  render() {
    return (
      <div style={Style}>
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl type="date"></FormControl>
          {' '}
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default AgeTeller