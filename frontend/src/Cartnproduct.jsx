import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Cartnproduct({ nproduct }) {
  return (
    <Card className="my-3 p-3 rounded">
      
        <Card.Img variant="top" src={nproduct.image} alt="loading!"></Card.Img>
      
      <Card.Body>
        
          <Card.Title>{nproduct.name}</Card.Title>
        
       
        
    
      </Card.Body>
    </Card>
  );
}

export default Cartnproduct;
