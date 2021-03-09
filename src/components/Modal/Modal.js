import React, { Component } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";


export default class Modal extends Component {
  state = {};

  componentDidMount() {
    const { handleEsc } = this;
    window.addEventListener("keydown", handleEsc);
  }
  componentWillUnmount() {
    const { handleEsc } = this;
    window.removeEventListener("keydown", handleEsc);
  }

  handleClose = (e) => {
    console.log("target", e.target);
    console.log("currentTarget", e.currentTarget);

    const { toggleModal } = this.props;
    console.log(toggleModal);
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  handleEsc = (e) => {
    console.log(e.code);
    const { toggleModal } = this.props;
    console.log(toggleModal);
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  render() {
    const { handleClose } = this;
    const { children, source } = this.props;
    return createPortal(
      <div className={s.backDrop} onClick={handleClose}>
        <div className={s.content}>
          <p>Hello World</p>
          <img src={source} alt="" />
          {children}
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
}
