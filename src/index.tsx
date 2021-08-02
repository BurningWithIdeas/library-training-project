import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import store from "./store";
import "./index.scss";
import "Utils/fonts.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
