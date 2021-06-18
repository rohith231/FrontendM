import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "../routes";
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map((el, index) => {
            return (
              <Route
                path={el.path}
                exact
                component={el.component}
                key={index}
              ></Route>
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
