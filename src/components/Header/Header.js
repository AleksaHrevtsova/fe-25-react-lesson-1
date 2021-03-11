import React, { Component } from "react";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";
import Weather from "../Weather/Weather";

import s from "./Header.module.css";

class Header extends Component {
  state = {
    showWidget: false,
  };
  toggleWidget = () => {
    // console.log(`toggle`);
    this.setState({
      showWidget: !this.state.showWidget,
    });
  };
  render() {
    const { toggleWidget } = this;
    const { children } = this.props;
    const { showWidget } = this.state;

    return (
      <header className={s.header}>
        <div className="container">
          <a href="#" className={s.logo}>
            Header
          </a>
          <Timer />
          {showWidget && (
            <Modal toggleModal={toggleWidget}>
              <Weather />
            </Modal>
          )}
          <button className="mainBtn" onClick={toggleWidget}>
            show Weather
          </button>
          <nav>{children}</nav>
        </div>
      </header>
    );
  }
}

export default Header;
