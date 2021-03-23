const addUser = (userObject) => {
  return {
    type: "ADD_USER",
    payload: userObject,
  };
};

const deleteUser = (email) => {
  return {
    type: "DELETE_USER",
    payload: email,
  };
};
export default { addUser, deleteUser };
