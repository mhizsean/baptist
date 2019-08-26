import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import './Countdown.css';

export default class About extends Component {


render() {

    // Random component
const Completionist = () => <span>Its Today!!!</span>;

// Renderer callback with condition
const renderer = ({ months, days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days}days : {hours}hours : {minutes}mins : {seconds}sec</span>;
  }
};
    return(
        <Countdown
    date={Date.now() + 2223456789}
    renderer={renderer}
  >
      </Countdown>
    )
};
}