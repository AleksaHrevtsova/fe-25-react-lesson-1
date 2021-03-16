import React from "react";
import PropTypes from "prop-types";
import s from "./Navigation.module.css";
import { v4 as genId } from "uuid";
import { NavLink } from "react-router-dom";

const Navigation = ({ links }) => {
  return (
    <>
      <ul className={s.navList}>
        {/* <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" exact>
            Contacts
          </NavLink>
        </li> */}
        {links.map((el) => {
          const { props, name } = el;
          return (
            <li key={genId()}>
              <NavLink {...props}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navigation;

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      props: PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
      }),
    })
  ),
};
