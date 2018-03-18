import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UsersController from './controllers/UsersController';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersController />
      </div>
    );
  }
}

export default App;
