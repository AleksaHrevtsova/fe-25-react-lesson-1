import React from "react";
import s from "./Footer.module.css";

const Footer = () => (
  <footer className={s.footer}>
    <div className={s.container}>
      <div className={s.row}>
        <div className={s.textCenter}>
          <a className={s.logo}>
            <img src="#" alt="logo" />
          </a>
          <nav className={s.navbar}>
            <ul className={s.navLinks}>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">services</a>
              </li>
              <li>
                <a href="#">contacts</a>
              </li>
            </ul>
          </nav>
          <ul className={s.social}>
            <li>
              <a href="#">
                <img src="" alt="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="" alt="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="" alt="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="" alt="icon" />
              </a>
            </li>
          </ul>
          <p>
            &copy; Всі права захищені <span>CS technology 2021</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
