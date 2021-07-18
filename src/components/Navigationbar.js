import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../css/landing.css";

export default function Navigationbar(){
  return(
    // <>
<Navbar expand="lg" fixed="top" variant="dark">
<Navbar.Brand className="tbrand" href="#home" style={{color: '#F1B416'}}>TECHNO COLOSSEUM</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" variant="dark"/>
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
    <Nav.Link href="#about" style={{color: 'white'}}>ABOUT
    </Nav.Link>
    <Nav.Link href="#domains" style={{color: 'white'}}>DOMAINS
    </Nav.Link>
    <Nav.Link href="#faqs" style={{color: 'white'}}>FAQ
    </Nav.Link>
    <Nav.Link href="#contact" style={{color: 'white'}}>
    CONTACT
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

  )
}