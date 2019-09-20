import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Route, Switch } from 'react-router-dom'
import VetList from './VetList';
import OwnerList from './OwnerList';
import Home from './Home';

export default class HeaderNavigation extends Component {

    render() {
        return (
            <div>
                <Navbar fixed="top" bg="primary" variant="dark" className="border-bottom border-gray" style={{ height: 50}}>
                    <Navbar.Brand href="/home">Petclinic App</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/owners">Owners</Nav.Link>
                        <Nav.Link href="/vets">Vets</Nav.Link>
                    </Nav>
                </Navbar>
                <div>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/vets" component={VetList} />
                        <Route path="/owners" component={OwnerList} />
                    </Switch>

                </div>
            </div>

        );
    }
}