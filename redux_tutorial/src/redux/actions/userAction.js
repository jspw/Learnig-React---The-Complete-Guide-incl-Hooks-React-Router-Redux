import * as actions from "../actionTypes";

const userAction = (info) => ({
  type: actions.USER_INFO,
  payload: info,
});

export default userAction;
