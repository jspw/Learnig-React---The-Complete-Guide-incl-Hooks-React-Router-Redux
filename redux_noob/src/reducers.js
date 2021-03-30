const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
      };

    case "LOGOUT":
      return {
        isLoggedIn: false,
      };

    default:
      return {
        isLoggedIn: state,
      };
  }
};

export default reducer;
