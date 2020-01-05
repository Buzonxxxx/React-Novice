import React from "react";
import ReactDOM from "react-dom";
import WorldClock from "./components/WorldClock";

const App = () => {
    return <WorldClock />;
}

ReactDOM.render(<App />, document.querySelector("#root"));
