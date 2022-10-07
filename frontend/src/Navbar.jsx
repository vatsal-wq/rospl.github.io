import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { LinkContainer } from "react-router-dom"

function Navmain () {

    return (

        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">forgetech</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )

   }


export default Navmain;