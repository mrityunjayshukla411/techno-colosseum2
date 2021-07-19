import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import "../css/contact.css";
import weblogo from "../images/contact/website.svg";
import fblogo from "../images/contact/fb.svg";
import instalogo from "../images/contact/insta.svg";
import Fade from 'react-reveal/Fade';

export default function Contact(){
    return(
        <Container fluid className="contact-body">
                     <Fade>
            <Row className="con">
                <Col xs={12} md={6}>
                    <h3 className="event-name">TECHNO COLOSSEUM</h3>
                    </Col>
                <Col xs={12} md={6}>
                    <div className="contact-info">
                        <h4>CONTACT</h4>
                        <p>contactus.ieeesbmanipal@gmail.com</p>
                        <p>Amartya Khan : (+91) 70441 92241</p>
                        <p>Agrja Rastogi : (+91) 95329 92194</p>
                        <div className="social">
                        <span><a href="https://instagram.com/ieeesbm?utm_medium=copy_link" target="_blank" rel="noopener noreferrer"><img src={instalogo}/></a></span>
                        <span><a href="https://ieeemanipal.com/" target="_blank" rel="noopener noreferrer"><img src={weblogo}/></a></span>
                        <span><a href="https://www.facebook.com/ieeesbmanipal/" target="_blank" rel="noopener noreferrer"><img src={fblogo}/></a></span>
                        </div>
                    </div>
                </Col>
            </Row>
            </Fade>
        </Container>
    )
}