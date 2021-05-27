import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";
import coinsReducer from "./Reducers/index";

let storeCoins = {
  listCoins: {
    data: {},
    message: "",
    response: "",
  },
  coinPrices: {
    data: {},
    message: "",
    response: "",
  },
  historicalData: {
    data: [],
    message: "",
    response: "",
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  coinsReducer,
  { ...storeCoins },
  composeEnhancers(applyMiddleware(logger, promise))
);

store.subscribe(() => {
  const state = store.getState();
  // console.log("store subscribe--> " + JSON.stringify(state));
  if (state) {
    storeCoins = state;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
