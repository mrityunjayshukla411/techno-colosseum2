import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../css/landing.css";

export default function Navigationbar(){
  return(
<Navbar expand="lg" fixed="top" variant="dark">
<Navbar.Brand className="tbrand" href="#home">TECHNO COLOSSEUM</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" variant="dark"/>
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
    <Nav.Link href="#about">About
    </Nav.Link>
    <Nav.Link href="#domains">Domains
    </Nav.Link>
    <Nav.Link href="#faq">FAQ
    </Nav.Link>
    <Nav.Link href="#contact">
    Contact
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  )
}