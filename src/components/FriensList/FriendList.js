import React from "react";
import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";
const List = ({ array }) => {
  return (
    <ul className={s.list}>
      {array.map((el) => {
        const { name, avatar } = el;
        return (
          <FriendListItem
            key={el.id}
            title={name}
            url={avatar}
            className={s.item}
          />
          // <li key={el.id}>
          //   {name}
          //   <img src={avatar} alt={name} />
          // </li>
        );
      })}
    </ul>
  );
};
export default List;
