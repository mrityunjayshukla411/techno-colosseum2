import React, { useEffect } from 'react';
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
    "time":"12:00pm 23/07/21 - 11:59am 25/07/21"
},
{
    "image":ml,
    "title":"Machine Learning",
    "desc":`It's time to test your AI knowledge in the arena. Claim victory over your opponents with your skills and efforts.
     Your speed and accuracy are what matters here.`,
     "time":"12:00pm 23/07/21 - 11:59am 24/07/21"
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
     "time":"12:00pm 23/07/21 - 11:59pm 25/07/21"
},
{   "image":appdev,
    "title":"App Development",
    "desc":`Enter the app development arena to develop a full-stack or a front-end app. 
    Race against time with your arsenal of tech weaponry to develop an app with the given 
    prompt and emerge victorious.`,
     "time":"12:00pm 23/07/21 - 11:59pm 25/07/21"
},

{   "image":cp,
    "title":"Coding",
    "desc":`Enter into the coding arena  to test your daring.
    Courage in the face of the unknown is an important quality of any coder. 
    Race against time to solve the problems and secure your position at the top of the 
    leaderboard.`,
    "time":"12:00pm 23/07/21 - 11:59am 25/07/21"
},
{
    "image":ml,
    "title":"Machine Learning",
    "desc":`It's time to test your AI knowledge in the arena. Claim victory over your 
    opponents with your skills and efforts. Your speed and accuracy are what matters here.`,
     "time":"12:00pm 23/07/21 - 11:59am 24/07/21"
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
     "time":"12:00pm 23/07/21 - 11:59pm 25/07/21"
},
{   "image":appdev,
    "title":"App Development",
    "desc":`Enter the app development arena to develop a full-stack or a front-end app. 
    Race against time with your arsenal of tech weaponry to develop an app with the given 
    prompt and emerge victorious.`,
     "time":"12:00pm 23/07/21 - 11:59pm 25/07/21"
},

]
const isBrowser = typeof window !== "undefined"

export default function Domain(){
const [wwidth,setWwidth] = useState(typeof window !== `undefined` ? window.innerWidth : 768);
const [items,setItems] = useState(3);

useEffect(()=>{
  if(wwidth>768){
    setItems(5);
  }
  else{
    setItems(3);
  }
},[wwidth]);

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight className="arrow-icon"/>
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft className="arrow-icon"/>
          </div>
        );
      };
      const [imageIndex, setImageIndex] = useState(0);

      const settings = {
        infinite: true,
        lazyLoad: true,
        focusOnSelect:true,
        speed: 300,
        slidesToShow: items,
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
            <h6 className="h2-color">{domain.title}</h6>
            <p>{domain.desc}</p>
            <p className="h2-color">{domain.time}</p>
            </div>
          </div>
        ))}
      </Slider>
        </Container>
    )
}