import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppHeader from "./components/AppHeader";
import Home from "./components/Home";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <BrowserRouter>
          <div className="App container">
            <AppHeader />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </ReduxProvider>
    );
  }
}

export default App;
