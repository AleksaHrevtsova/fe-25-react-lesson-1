import React from "react";
import s from "./Header.module.css";
// console.log(s);
import f from "../Footer/Footer.module.css";

const Header = function ({ children }) {
  return (
    <header className={s.header}>
      <a href="#" className={s.logo}>
        Header
      </a>
      <a href="#" className="class">
        App class
      </a>
      <a href="#" className={s.class}>
        header class
      </a>
      <a href="#" className={f.class}>
        footer class
      </a>
      <button className={s.navbarToggler}>-</button>
      <nav className={s.navbar}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        {children}
      </nav>
    </header>
  );
};

export default Header;
