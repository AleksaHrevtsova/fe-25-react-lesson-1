import React from "react";
import { v4 as id } from "uuid";
import Item from "../Item/FriendListItem";
const i = id();
console.log("id: ", i);

const Gallery = ({ array }) => {
  console.log("array: ", array);
  return (
    <ul>
      {array.map((el) => (
        <Item title={el.alt} url={el.url} />
        // <li key={id()}>
        //   <img src={el.url} alt={el.alt} width="200" />
        // </li>
      ))}
    </ul>
  );
};

export default Gallery;
