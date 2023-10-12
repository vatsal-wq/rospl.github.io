import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Universitydetails ({ uproduct }) {
    return (
        <Card className="my-3 p-3 rounded">
          <Link to={`/university/${uproduct.id}`}>
            <Card.Img variant="top" src={uproduct.image} alt="loading!"></Card.Img>
          </Link>
    
          <Card.Body>
            <Link to={`/university/${uproduct.id}`}>
              <Card.Title>{uproduct.name}</Card.Title>
            </Link>
            $ {uproduct.price}
            <Button className="btn btn-success rounded-full mx-2">Buy Now!</Button>
            <Button className="btn btn-danger rounded-full mx-4">
              Add to Cart!
            </Button>
          </Card.Body>
        </Card>
      );
    }
    

export default Universitydetails;