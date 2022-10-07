import React from 'react'
import  Navbar  from './Navbar'
import  Universitydetails  from './Universitydetails'
import { uproducts } from './uproducts'
import { Row, Col } from "react-bootstrap"


export function University() {

    return (
        <>
        <Navbar />
        <Row>
        
            {uproducts.map((uproduct) => (
                <Col key={uproduct.id} md ={3}>
                <Universitydetails uproduct={uproduct} />
                </Col>
            ))}
            </Row>
        
        </>
    );
}


