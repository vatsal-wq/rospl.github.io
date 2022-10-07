import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "./image/novice.png";
import img2 from "./image/university.png";
import img3 from "./image/gamer.png"


import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";


function Cards() {
  return (
    <>
    <Row >
       

      <Card style={{ width: "18rem" }} className = "mx-5">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Novice</Card.Title>
            <Card.Text>
              Nosedive into the world of Computing with our entry level
              products.
            </Card.Text>
            <Link to="/novice" className="btn btn-success rounded-full">
              Visit the Shop!
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className = "mx-5">
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>University</Card.Title>
            <Card.Text>
              Nosedive into the world of Computing with our entry level
              products.
            </Card.Text>
            <Link to="/university" className="btn btn-success rounded-full">
              Visit the Shop!
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }} className = "mx-5">
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Gamer</Card.Title>
            <Card.Text>
              Nosedive into the world of Computing with our entry level
              products.
            </Card.Text>
            <Link to="/gamer" className="btn btn-success rounded-full">
              Visit the Shop!
            </Link>
          </Card.Body>
        </Card>

      
    </Row>
    </>
      
  );
}

export default Cards;
