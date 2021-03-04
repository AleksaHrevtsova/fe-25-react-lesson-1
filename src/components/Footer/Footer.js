import React from "react";
import s from "./Footer.module.css";

const Footer = () => (
  <footer className={s.footer}>
    <div className="container">
      <p>
        &copy; Всі права захищені <span>CS technology 2021</span>
      </p>
    </div>
  </footer>
);

export default Footer;
