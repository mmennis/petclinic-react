import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import VetDetail from './VetDetail';
import _ from 'lodash';
 
export default class VetList extends Component {

    state = {
        vets: []
    }

    componentDidMount() {
        axios.get('http://localhost:4100/vets')
        .then((response) => {
            const vets = response.data.data;
            this.setState({ vets });
        })
        .catch((err) => {
            console.error(`Problem with getting vets data: ${err}`);
        })
    }

    render() {
        let vetRows = _.chunk(this.state.vets, 4);

        return (
            
            <Container fluid="true">
                {
                    vetRows.map((row) => (
                    <Row>
                        {
                            row.map(vet => 
                                <Col>
                                    <VetDetail vet={vet} />
                                </Col>
                            )
                        }
                    </Row>
                ))
                }
            </Container>
 
            
        );
    }
}