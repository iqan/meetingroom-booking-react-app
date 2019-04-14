import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
      </div>
    );
  }
}

export default App;
