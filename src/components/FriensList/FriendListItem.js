import React from "react";

const FriendListItem = ({ name, avatar }) => {
  return (
    <li>
      {name}
      <img src={avatar} alt={name} />
    </li>
  );
};
export default FriendListItem;
