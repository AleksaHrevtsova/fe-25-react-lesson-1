import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ links, prop1, prop2 }) => {
  console.log(links);
  return (
    <nav>
      <ul>
        {links.map((el) => (
          <li key={el.id}>
            <a href={el.props.path}>
              {el.props.name}-{el.props.number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  prop1: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      props: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number,
        path: PropTypes.string,
      }),
    })
  ),
};
