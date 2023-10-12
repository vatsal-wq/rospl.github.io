import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { LinkContainer } from "react-router-dom"
import {useCookies} from 'react-cookie';
var CryptoJS = require('crypto-js');

function Navmain() {
  const [cookies] = useCookies('user');
    var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    const user = decryptedData.email;
    if (user) {
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">forgetech</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="">{user}</Nav.Link>
              <Nav.Link href = "/cart">Cart</Nav.Link>
              
            </Nav>
          </Container>
        </Navbar>
      );
    }
    else {
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">forgetech</Navbar.Brand>
            <Nav className="me-auto">
          
              <Nav.Link href="">Account</Nav.Link>
              <Nav.Link Link to = "/cart">Cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      );
    }
  
}

export default Navmain;
