import React from "react";
import PropTypes from "prop-types";
import s from "./Navigation.module.css";
import { v4 as genId } from "uuid";

const Navigation = ({ links }) => {
  return (
    <>
      <ul className={s.navList}>
        {links.map((el) => {
          const { path, name } = el.props;
          return (
            <li key={genId()}>
              <a href={path}>{name}</a>
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
