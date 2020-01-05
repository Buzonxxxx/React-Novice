import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const Style = {
  padding: "5%",
  textAlign: "center",
  fontSize: "16px"
};

// function component
const AgeTeller = () => {
  return (
    <div style={Style}>
      <Form inline>
        <h2>Input your Birthday!</h2>
        <FormControl type="date"></FormControl>{" "}
        <Button onClick={() => alert("Thanks for your input!")}>Submit</Button>
      </Form>
    </div>
  );
};

// class component
// class AgeTeller extends Component {
//   render() {
//     return (
//       <div style={Style}>
//         <Form inline>
//           <h2>Input Your Birthday!</h2>
//           <FormControl type="date"></FormControl> <Button>Submit</Button>
//         </Form>
//       </div>
//     );
//   }
// }

export default AgeTeller;
