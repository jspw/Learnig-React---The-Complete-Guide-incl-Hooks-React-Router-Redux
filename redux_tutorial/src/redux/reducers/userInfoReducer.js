import * as actions from "../actionTypes";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case actions.USER_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
