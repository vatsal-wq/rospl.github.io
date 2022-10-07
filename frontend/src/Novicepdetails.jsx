import React from "react";
// import axios from "axios";
import nproducts from "./nproducts";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  ListGroup,
  Image,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Novicepdetails = () => {
  const params = useParams();
  const nproduct = nproducts.find((p) => p.id === params.id);

  return (
    <div>
      <Link to="/novice" className="btn btn-light">
        {" "}
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={nproduct.image} alt={nproduct.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{nproduct.name}</h3>
            </ListGroupItem>
            <ListGroupItem>Price : ${nproduct.price}</ListGroupItem>
            <ListGroupItem> {nproduct.description} </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col> Status: </Col>
              <Col>
                {nproduct.countInStock > 0 ? "In Stock!" : "Out of Stock"}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button className="btn-block" type="button">
              {" "}
              Add to cart{" "}
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default Novicepdetails;
