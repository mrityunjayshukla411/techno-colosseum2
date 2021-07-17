import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
import "../css/countdown.css";

const Completionist = () => <span>The Event has started!</span>;

// Renderer callback with condition
const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <h1>{days}:{hours}:{minutes}:{seconds}</h1>;
  }
};

export default function CountdownPage(){
    return(
        <Container fluid className="countdown-body">
            <div className="countdown-info">
            <h2>EVENT WILL BE LIVE IN</h2>
            <Countdown
    date={Date.now() + 86400000}
    renderer={renderer}
  />
            </div>

        </Container>
    )
}