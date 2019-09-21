import React, { Component } from 'react';
import { Image } from 'react-bootstrap';



export default class Home extends Component {

    render() {
        return (
            <div>
                <div>
                    <h3>Pet Clinic React App</h3>
                </div>
                <Image src="images/pets.jpg" rounded fluid/>
            </div>
        );
    }
};