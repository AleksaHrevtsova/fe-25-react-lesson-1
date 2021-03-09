import React from "react";
import Timer from "../Timer/Timer";

import s from "./Header.module.css";

const Header = function ({ children }) {
  return (
    <header className={s.header}>
      <div className="container">
        <a href="#" className={s.logo}>
          Header
        </a>
        <Timer />
        <nav>{children}</nav>
      </div>
    </header>
  );
};

export default Header;
