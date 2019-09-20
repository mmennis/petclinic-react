import React from 'react';
import Card from 'react-bootstrap/Card';

const VetDetail = (props) => {

    let vet = props.vet;
    return (
        <Card style={{ width: '14rem'}} key={vet._id}>
            <Card.Header>{vet.specialty}</Card.Header>
            <Card.Body>
                <Card.Title>{vet.first_name} {vet.last_name}</Card.Title>
                <Card.Subtitle></Card.Subtitle>
                <Card.Text>
                    {vet.address}<br/>
                    {vet.city} {vet.state}
                </Card.Text>
            </Card.Body>
            <Card.Footer>{ vet.telephone }</Card.Footer>
        </Card>
    );

};

export default VetDetail;