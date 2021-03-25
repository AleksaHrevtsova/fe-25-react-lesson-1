import { v4 as id } from "uuid";
// ================== BEFORE TOOLKIT
// const addUser = (userObject) => {
//   return {
//     type: "ADD_USER",
//     payload: {
//       id: id(),
//       mail: userObject.email,
//       pass: userObject.pass,
//     },
//   };
// };

// const deleteUser = (email) => {
//   return {
//     type: "DELETE_USER",
//     payload: email,
//   };
// };
// export default { addUser, deleteUser };

// ================== AFTER

import { createAction } from "@reduxjs/toolkit";

const addUser = createAction("ADD_USER", ({ email, pass }) => {
  return {
    payload: {
      id: id(),
      email,
      pass,
    },
  };
});

const deleteUser = createAction("DELETE_USER");
// console.dir(addUser);
// console.log(addUser.type);
// console.dir(deleteUser);
// console.log(deleteUser.type);
export default { addUser, deleteUser };
