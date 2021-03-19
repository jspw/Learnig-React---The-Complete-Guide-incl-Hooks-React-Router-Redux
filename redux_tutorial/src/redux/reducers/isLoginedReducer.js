import * as actions from "../actionTypes";

const isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case actions.IS_LOGGED_IN:
      return action.payload;

    default:
      return state;
  }
};
export default isLoggedInReducer;
