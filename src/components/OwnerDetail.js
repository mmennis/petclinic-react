import React from 'react';
import Card from 'react-bootstrap/Card';

const OwnerDetail = (props) => {

    let owner = props.owner;
    return (
        <Card ket={owner._id}>
            <Card.Header>{owner.first_name} {owner.last_name}</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    {owner.address} <br />
                    {owner.city}, {owner.state} <br />
                    {owner.telephone}
                </Card.Text>
            </Card.Body>
            <Card.Footer>{owner.pets.length} pets</Card.Footer>
        </Card>
    );
}

export default OwnerDetail;