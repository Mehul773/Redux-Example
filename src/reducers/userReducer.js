const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS":
      return [...action.payload];
    case "TOGGLE_USER_SELECTION":
      return state?.map((user) =>
        user.id == action.payload
          ? { ...user, isSelected: !user.isSelected }
          : user
      );
    default:
      return state;
  }
};

export default userReducer;
