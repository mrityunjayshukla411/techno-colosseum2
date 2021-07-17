import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import '../css/landing.css';
import Techno from '../images/landing/technocolleusem-logo.svg';

export default function Landing(){
    return(
        <Container fluid className="landingBody">
                <img className="techno-img" src={Techno} alt="logo"/>
                <div className="landing-info">
                <p>23 - 25 Jul 2021</p>
                <button className="reg-btn">Register</button>
                </div>
        </Container>
    )
}