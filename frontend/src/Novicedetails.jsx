import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function NoviceDetails({ nproduct }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/novice/${nproduct.id}`}>
        <Card.Img variant="top" src={nproduct.image} alt="loading!"></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`/novice/${nproduct.id}`}>
          <Card.Title>{nproduct.name}</Card.Title>
        </Link>
        <Card.Text>{nproduct.description}</Card.Text>
        <Button className="btn btn-success rounded-full mx-2">Buy Now!</Button>
        <Button className="btn btn-danger rounded-full mx-4">
          Add to Cart!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NoviceDetails;
