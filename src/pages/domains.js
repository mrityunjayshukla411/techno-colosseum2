import React from 'react';
import { useState } from "react";
import Slider from "react-slick";
import { Container} from 'react-bootstrap';
import appdev from '../images/domains/app-dev-card-01.svg';
import webdev from "../images/domains/web-dev-card-01.svg";
import ml from "../images/domains/ML-card.svg";
import cp from "../images/domains/CP-card-01.svg";
import elec from "../images/domains/electronics-card-01.svg";
import "../css/domains.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const domains = [
{   "image":cp,
    "title":"Coding",
    "desc":`Enter into the coding arena  to test your daring.
    Courage in the face of the unknown is an important quality of any coder. 
    Race against time to solve the problems and secure your position at the top of the 
    leaderboard.`,
    "time":"12"
},
{
    "image":ml,
    "title":"djd",
    "desc":`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit`,
     "time":"12"
},
{
    "image":elec,
    "title":"Electronics",
    "desc":`History has seen titans and emperors battle their hearts out on the arena, 
    filling the arena with the energy of their battle cry and clash of weapons.
    It's time to rewrite history our way. So go out in that rising sun with your circuitry 
    skills sharp and ready to clash, devices crackling in arrival and fill the arena with
     electrifying energy. Battleface On!`,
     "time":"12"
},
{
    "image":webdev,
    "title":"Web Development",
    "desc":`Welcome to the Time Travellers Developers Section.
    New is good but the Old is gold for a reason. Bring out the developer in you with an 
    exhilarating race back to the good old days. Prove your mettle and you shall be rewarded.`,
     "time":"11"
},
{   "image":appdev,
    "title":"App Development",
    "desc":`Enter the app development arena to develop a full-stack or a front-end app. 
    Race against time with your arsenal of tech weaponry to develop an app with the given 
    prompt and emerge victorious.`,
     "time":"23"
},
]

export default function Domain(){
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight/>
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft/>
          </div>
        );
      };
      const [imageIndex, setImageIndex] = useState(0);

      const settings = {
        infinite: true,
        dots:true,
        dotsClass:'slick-dots',
        lazyLoad: true,
        focusOnSelect:true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
    
    return(
        <Container fluid className="domain-body">
            <h1>DOMAINS</h1>
           
        {/* <Carousel slides={slides} onChange={handleChange}/> */}
        <Slider className="main-slider"{...settings}>
        {domains.map((domain, idx) => (
          <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={domain.image} alt={domain} />
            <div className="domain-info">
            <h6>{domain.title}</h6>
            <p>{domain.desc}</p>
            <p>{domain.time}</p>
            </div>
          </div>
        ))}
      </Slider>
        </Container>
    )
}