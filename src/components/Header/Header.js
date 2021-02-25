import React from "react";
import s from "./Header.module.css";
// console.log(s);

const Header = function ({ children }) {
  return (
    <header className={s.header}>
      <a href="#" className={s.logo}>
        Header
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
