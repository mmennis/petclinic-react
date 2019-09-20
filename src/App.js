import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import HeaderNavigation from './components/HeaderNavigation';

import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div><HeaderNavigation /></div>
          <div>
            <Home />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
