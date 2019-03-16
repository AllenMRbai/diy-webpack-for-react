import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./main.scss";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
