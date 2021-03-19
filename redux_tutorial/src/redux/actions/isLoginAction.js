import * as actions from "../actionTypes";

const isLoggedInAction = (isLogin) => {
  return {
    type: actions.IS_LOGGED_IN,
    payload: isLogin,
  };
};
