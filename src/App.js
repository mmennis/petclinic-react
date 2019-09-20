import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import VetList from './components/VetList';

class App extends Component {
  render() {
    return (
      <div>
        <VetList />
      </div>
    );
  }
}

export default App;
