import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import VetList from './components/VetList';
import HeaderNavigation from './components/HeaderNavigation';

class App extends Component {
  render() {
    return (
      <div>
        <div><HeaderNavigation /></div>
        <div>
          <VetList />
        </div>
      </div>
    );
  }
}

export default App;
