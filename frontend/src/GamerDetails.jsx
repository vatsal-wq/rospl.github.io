import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function GamerDetails({ gproducts }) {
    console.log(gproducts)
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/gamer/${gproducts.id}`}>
            <Card.Img  src={gproducts.image} variant="top" /> </Link>
            <Card.Body>
                <Card.Title>{gproducts.name}</Card.Title>
                <Card.Text>
                    {gproducts.description}
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>

    )
}

export default GamerDetails;