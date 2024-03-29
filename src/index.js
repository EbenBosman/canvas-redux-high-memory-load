import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";

import AppRouter from "./routers/AppRouter";

import "./styles.css";

const { store } = configureStore();

const rootElement = document.getElementById("root");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, rootElement);
