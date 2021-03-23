const userReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_USER":
      console.log(`CREATE_USER`);
      const newState = action.payload;
      return newState;

    default:
      return state;
  }
};

export default userReducer;
