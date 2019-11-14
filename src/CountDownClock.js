import React, { Component } from "react";
import "./CountDownClock.css";

class CountDownClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: '25',
      seconds: '00'
    };
  }

  tick = () => {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;
    this.setState({
      minutes: min,
      seconds: sec
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }
    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }
    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--;
  };

  startCountDown = () => {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = this.state.seconds + time * 60;
  };

  stopCountDown = () => {
    clearInterval(this.intervalHandle);
  };

  render() {
    return (
      <div className="clock">
        <h1>
          {this.state.minutes}:{this.state.seconds}
        </h1>
        <button className="start-btn" onClick={this.startCountDown}>
          Start
        </button>
        <button className="stop-btn" onClick={this.stopCountDown}>
          Stop
        </button>
      </div>
    );
  }
}

export default CountDownClock;
