import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import "../css/countdown.css";
import moment from 'moment';



class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        // Mapping the date values to radius values
        const daysRadius = mapNumber(days, 30, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            // <div className="countdown-body">
            <Container fluid  className="countdown-body">
                <h1>EVENT WILL BE <div className="h2-color" style={{display: 'inline-block'}}> LIVE </div> IN</h1>
                <Row><Col xs={12}><div className="countdown-wrapper">
                    {days && (
                        <div className="countdown-item">
                            {days}
                            <span>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">
                            {hours}
                            <span>hours</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item">
                            {minutes}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                </div></Col></Row>
            {/* </div> */}
            </Container>
        );
    }
}



function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

function CountDownTimer () {
return (

  <Countdown timeTillDate="08 16 2022, 6:31 pm" timeFormat="MM DD YYYY, h:mm a" />


)
}

export default CountDownTimer;


