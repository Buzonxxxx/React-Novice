import React from "react";
import ReactDOM from "react-dom";
import { createsStore } from "redux";
import { Provider } from "react-redux";

import App from "./Components";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createsStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
