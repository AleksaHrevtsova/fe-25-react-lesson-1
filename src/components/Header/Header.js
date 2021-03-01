import React from "react";
import s from "./Header.module.css";
import { Navigation } from "../Navigation/Navigation";
const Header = function ({ children }) {
  return (
    <header className={s.header}>
      <div className="container">
        <a href="#" className={s.logo}>
          Header
        </a>
        <nav>{children}</nav>
      </div>
    </header>
  );
};

export default Header;
