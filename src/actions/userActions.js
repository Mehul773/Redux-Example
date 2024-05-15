export const addUsers = (users) => {
  return {
    type: "ADD_USERS",
    payload: users,
  };
};

export const toggleUserSelection = (id) => {
  return {
    type: "TOGGLE_USER_SELECTION",
    payload: id,
  };
};
