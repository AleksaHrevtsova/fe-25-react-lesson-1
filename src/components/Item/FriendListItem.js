import React from "react";

const Item = ({ title, url }) => {
  return (
    <li>
      {title}
      <img src={url} alt={title} />
      <div>
        <h3>name</h3>
        <p></p>
        <ul></ul>
      </div>
    </li>
  );
};
export default Item;

