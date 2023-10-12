import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function NoviceDetails({ nproduct }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/novice/${nproduct._id}`}>
        <Card.Img variant="top" src={nproduct.image} alt="loading!"></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`/novice/${nproduct._id}`}>
          <Card.Title>{nproduct.name}</Card.Title>
        </Link>
        ${nproduct.price}
        
      </Card.Body>
    </Card>
  );
}

export default NoviceDetails;
