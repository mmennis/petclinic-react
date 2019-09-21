import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import HeaderNavigation from './components/HeaderNavigation';

import { Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom'
import VetList from './components/VetList';
import OwnerList from './components/OwnerList';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div><HeaderNavigation /></div>
        </Row>
        <Row>
          <h3>Pet Clinic React App</h3>
        </Row>
        <Row>
          <div>
              <Switch>
                  <Route path="/vets" component={VetList} />
                  <Route path="/owners" component={OwnerList} />
                  <Route path="/home" component={Home} />
              </Switch>
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
