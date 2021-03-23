const createUser = (user) => {
  return {
    type: "CREATE_USER",
    payload: {
      email: user.email,
      password: user.pass,
    },
  };
};

export default { createUser };
