import React, { useState, useEffect } from "react";
// import axios from "axios";
import Novicedetails from "./Novicedetails";
import { Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import { useCookies } from "react-cookie";
import Cartnproduct from "./Cartnproduct";
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
var CryptoJS = require("crypto-js");


const Cart = () => {
  const [nproducts, setnproducts] = useState([]);
  var total = 0; 
  const [cookies] = useCookies("user");
  var bytes = CryptoJS.AES.decrypt(cookies.user, "my-secret-key@123");
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  const user = decryptedData.email;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
        }),
      });

      const d = await res.json();
      console.log(d.user.cart);
      const data = d.user.cart;
      // console.log(data);
      setnproducts(data);
    };
    fetchProducts();
  }, []);

  function getTotal() {
    for(var i = 0; i < nproducts.length; i++) {
      total+=nproducts[i].price
    }
    console.log(total);
    return true
  }

  if (nproducts && getTotal()) {
    return (
      <>
        <Navbar />
        <Row>
        
          {nproducts.map((nproduct, i) => (
            <Col key={i} md={3}>
              <Cartnproduct nproduct={nproduct} />
            </Col>
          ))}
        </Row>
        <Link to="/shipping" className="btn btn-warning">
        {" "}

        Move to Shipping : Your Total Payable is {total}
      </Link>
      </>
    );
  }
  else {
    return (
      <div>
        Loading!
      </div>
    )
  }
};

export default Cart;
