import isLoggedInReducer from "./isLoginedReducer";

import userInfoReducer from "./userInfoReducer";

import searchKeyReducer from "./searchKeyReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  searchKey: searchKeyReducer,
  isLogged: isLoggedInReducer,
  userInfo: userInfoReducer,
});

export default allReducers;
