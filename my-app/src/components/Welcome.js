import React from "react";

class Welcome extends React.Component {
  state = { name: ["Sara", "Cahal", "Edite"] };
  render() {
    return this.state.name.map(person => <h1 key={person}>Hello, {person}</h1>);
  }
}

export default Welcome;
