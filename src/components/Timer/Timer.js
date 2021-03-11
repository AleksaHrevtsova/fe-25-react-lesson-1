import React, { Component } from "react";
import s from "./Timer.module.css";

class Timer extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  int = null;

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    this.int = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.int);
  }

  render() {
    const { time } = this.state;
    return <div className={s.clockFace}>{time}</div>;
  }
}
// export default Timer;
