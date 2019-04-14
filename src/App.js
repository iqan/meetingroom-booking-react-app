import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/AppHeader'
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <AppHeader />
          <Route exact path="/" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
