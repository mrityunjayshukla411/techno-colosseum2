import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import "../css/about.css";
import Techno from '../images/landing/technocolleusem-logo.svg';
import Fade from 'react-reveal/Fade';

export default function About(){
    return(
        <Container fluid className="about-body">
            <Fade>
            <Row>
            <Col xs={12} md={6} className="about-info">
                <h3><span style={{color: '#F1B416'}}>ABOUT</span> THE EVENT</h3>
                <p>Set in medieval times, Techno Colosseum is a multi-domain event that 
                    tests your skills in various technical fields. This three-day intense 
                    challenge comprises coding, electronics, machine learning, web dev, and 
                    app dev. These events will range from written tests, time-bound development projects, 
                    and conventional 
                    competitive coding. Contestants get a chance to go solo and exhibit their expertise by 
                    engaging in tasks of any of the five domains. It's time to arm up with your Gladius, 
                    become a Gladiator, and take over Techno Colosseum!</p>
            </Col>
            <Col xs={12} md={6} className="abt-img">
               <div className="event-img">
                    <img src={Techno} alt="event-logo"></img>
               </div>
            </Col>
            </Row>
</Fade>
        </Container>
    )
}