import React from "react";
import GamerDetails from "./GamerDetails";
import gproducts  from "./gproducts";
import Navbar from "./Navbar";
import { Row, Col } from "react-bootstrap";




export function Gamer() {
  return (
    <>
      <Navbar />
      <Row>
        {gproducts.map((gproducts) => (
          <Col key={gproducts.id} md={3}>
            <GamerDetails gproducts={gproducts} />
          </Col>
        ))}
      </Row>
    </>
  );
}
