import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import OwnerDetail from './OwnerDetail';
import _ from 'lodash';

export default class OwnerList extends Component {

    state = {
        owners: []
    }

    componentDidMount() {
        axios.get('http://localhost:4100/owners')
            .then((response) => {
                const owners = response.data.data;
                this.setState({ owners })
            })
            .catch((err) => {
                console.error(`Problem retrieveing owners from backend: ${err}`);
            })
    }

    render() {
        let ownerRows = _.chunk(this.state.owners, 2);
        return (
            <Container fluid>
                {
                    ownerRows.map((row, rowidx) => (
                        <Row key={rowidx}>
                            {
                                row.map((owner, colidx) => (
                                    <Col key={colidx}>
                                        <OwnerDetail owner={owner} />
                                    </Col>
                                ))
                            }
                        </Row>
                    ))
                }
            </Container>
        );
    }


}