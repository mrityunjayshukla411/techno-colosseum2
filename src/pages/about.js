import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import "../css/about.css";
import Techno from '../images/landing/technocolleusem-logo.svg';

export default function About(){
    return(
        <Container fluid className="about-body">
            <Row>
            <Col xs={12} md={6} className="about-info">
                <h3><span style={{color: '#F1B416'}}>ABOUT</span> THE EVENT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                     amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                     labore et dolore magna aliqua.</p>
            </Col>
            <Col xs={12} md={6} className="abt-img">
               <div className="event-img">
                    <img src={Techno} alt="event-logo"></img>
               </div>
            </Col>
            </Row>

        </Container>
    )
}