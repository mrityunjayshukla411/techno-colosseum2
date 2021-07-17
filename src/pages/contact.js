import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import "../css/contact.css";
import weblogo from "../images/contact/website.svg";
import fblogo from "../images/contact/fb.svg";
import instalogo from "../images/contact/insta.svg";

export default function Contact(){
    return(
        <Container fluid className="contact-body">
            <Row className="con">
                <Col xs={12} md={6}>
                    <h3 className="event-name">TECHNO COLESSEUM</h3>
                    </Col>
                <Col xs={12} md={6}>
                    <div className="contact-info">
                        <h4>CONTACT</h4>
                        <p>contactus.ieeesbmanipal@gmail.com</p>
                        <p>Amartya Khan : (+91) 70441 92241</p>
                        <p>Agrja Rastogi : (+91) 95329 92194</p>
                        <span><img src={instalogo}/></span>
                        <span><a href="https://ieeemanipal.com/"><img src={weblogo}/></a></span>
                        <span><img src={fblogo}/></span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}