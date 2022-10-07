import React, { useState, useEffect } from "react";
import axios from "axios";
import Novicedetails from "./Novicedetails";
import { Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";

const Novice = () => {
  const [nproducts, setnproducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/products");
      setnproducts(data);
    };
    fetchProducts();
  }, []);;

  return (
    <>
      <Navbar />
      <Row>
        {nproducts.map((nproduct) => (
          <Col key={nproduct.id} md={3}>
            <Novicedetails nproduct={nproduct} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Novice;
