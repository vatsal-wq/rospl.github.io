import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Universitydetails ({ uproduct }) {
    console.log(uproduct)
    return (
        <Card className="my-3 p-3 rounded">
            <Card.Img variant="top" src={uproduct.image} alt = "loading!"/>
            <Card.Body>
                <Card.Title>{uproduct.name}</Card.Title>
                <Card.Text>
                    {uproduct.description}
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>

    )
}

export default Universitydetails;