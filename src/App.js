import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron } from 'reactstrap'
import PortalTester from './PortalTester';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Jumbotron>
          <PortalTester />
        </Jumbotron>
      </div>
    );
  }
}

export default App;
