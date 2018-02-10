import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Onboard from './containers/Onboard/Onboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Onboard />
      </div>
    );
  }
}

export default App;
