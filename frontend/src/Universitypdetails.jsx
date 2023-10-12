import React, { useState, useEffect } from "react";
// import axios from "axios";
import Navbar from "./Navbar";
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
// import {useCookies} from 'react-cookie';
var CryptoJS = require('crypto-js');


const Universitypdetails = () => {
//   const params = useParams();
//   const [nproduct, setnproduct] = useState([]);
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const { data } = await axios.get(`/api/products/${params.id}`);
//       setnproduct(data);
//     };
//     fetchProduct();
//   });

//   async function AddToCart () {
//     const res = await fetch('http://localhost:8080/cart/add',{
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           user,
//           product: params.id
//         }) 
      
//     })
//     const data = await res.json()
//     if (data.status==="Ok") {
//       alert("Added to cart!")
    
//     }
//     else {
//       alert("Let us check the stock!")
//     }
//   }

//   const [cookies] = useCookies('user');
//     var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
//     var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//     const user = decryptedData.email;

  return (
     
    <div>
      <Navbar />
      <Link to="/university" className="btn btn-light">
        {" "}
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={uproduct.image} alt={uproduct.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{uproduct.name}</h3>
            </ListGroupItem>
            <ListGroupItem>Price : ${uproduct.price}</ListGroupItem>
            <ListGroupItem> {uproduct.description} </ListGroupItem>
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
            <Button onClick={AddToCart} className="btn-block" type="button">
              {" "}
              Add to cart{" "}
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default Universitypdetails;