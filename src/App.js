import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import AppFooter from "./components/AppFooter";

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
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={NotFound} />
            </Switch>
            <AppFooter />
          </div>
        </BrowserRouter>
      </ReduxProvider>
    );
  }
}

export default App;
