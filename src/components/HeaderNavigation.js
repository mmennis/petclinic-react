import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class HeaderNavigation extends Component {

    render() {
        return (
            <div>
                <Navbar fixed="top" bg="primary" variant="dark" className="border-bottom border-gray" >
                    <Navbar.Brand href="/home">Petclinic App</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/owners">Owners</Nav.Link>
                        <Nav.Link href="/vets">Vets</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}