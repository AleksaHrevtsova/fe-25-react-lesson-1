import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  state = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };
  int = "";
  date = "";

  //   shouldComponentUpdate() {}

  componentDidUpdate(prevProps, prevState) {
    this.int = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
    if (prevState.date === new Date().toLocaleDateString()) {
      this.setState({ date: new Date().toLocaleTimeString() });
    }
  }
  componentWillUnmount() {
    clearInterval(this.int);
  }
  render() {
    const { date, time } = this.state;
    return (
      <p className="timer">
        {date} <span>{time}</span>
      </p>
    );
  }
}
export default Timer;
