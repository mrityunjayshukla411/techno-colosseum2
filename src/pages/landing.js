import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import '../css/landing.css';
import Techno from '../images/landing/logo-01.png';
import {Link} from "gatsby";

export default function Landing(){
    return(
        <Container fluid className="landingBody">
                <img className="techno-img" src={Techno} alt="logo"/>
                <div className="landing-info">
                <p>17th - 19th August 2022</p>
                {/* <button className="reg-btn">
                Register   </button> */}
                <a target="_blank" href="https://forms.gle/KvUGxz2S58pkWceD9">
                <button class="btn">
                    <svg className="svgbutton" width="180px" height="60px" viewBox="0 0 180 60">
                    <polyline points="179,1 179,44 1,44 1,1 179,1" class="bg-line" />
                    <polyline points="179,1 179,44 1,44 1,1 179,1" class="hl-line" />
                    </svg>
                    <span>Register</span>
                </button>
                </a>
                </div>
        </Container>
    )
}