import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./store/reducer/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Container } from "./hoc";

//Manual Middle Ware code
// const logger = store => {
//     return next => {
//         return action => {
//             console.log("Middleware Dispacting", action);
//             const result = next(action);
//             console.log("Middle ware next state", store.getState());
//             return result;
//         }
//     }
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Container></Container>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
