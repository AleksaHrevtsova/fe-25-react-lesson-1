import React from "react";
import s from "./FriendList.module.css";
const List = ({ array }) => {
  return (
    <ul className={s.list}>
      {array.map((el) => {
        const { name, avatar } = el;
        return (
          <FriendListItem
            key={el.id}
            name={name}
            avatar={avatar}
            className={s.item}
          />
        );
      })}
    </ul>
  );
};
export default List;
