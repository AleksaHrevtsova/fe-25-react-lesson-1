import React from "react";
import s from "./Header.module.css";
// console.log(s);

const Header = function () {
  return (
    <header className={s.header}>
      <nav>
        <a href="#">Header</a>
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
      </nav>
    </header>
  );
};

export default Header;
