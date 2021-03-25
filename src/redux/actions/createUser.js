// const createUser = (user) => {
//   return {
//     type: "CREATE_USER",
//     payload: {
//       email: user.email,
//       password: user.pass,
//     },
//   };
// };

// export default { createUser };

import { createAction } from "@reduxjs/toolkit";

function filterProps(user) {
  //
}

// const createUser = createAction("CREATE_USER");
const createUser = createAction("CREATE_USER", ({ email, ...user }) => {
  return {
    payload: {
      ...user,
      mail: email,
    },
  };
});

export default { createUser };
