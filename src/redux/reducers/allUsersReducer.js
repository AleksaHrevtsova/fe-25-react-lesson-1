const init = [
  { email: "a@gmail.com", pass: "111111" },
  { email: "b@gmail.com", pass: "441111" },
  { email: "c@gmail.com", pass: "115511" },
];

const allUsersReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
      const newS = [...state, payload];
      console.log(newS);
      return newS;

    case "DELETE_USER":
      const newSt = state.filter((elem) => elem.email !== payload);
      console.log(newSt);
      return newSt;

    default:
      return state;
  }
};

export default allUsersReducer;
