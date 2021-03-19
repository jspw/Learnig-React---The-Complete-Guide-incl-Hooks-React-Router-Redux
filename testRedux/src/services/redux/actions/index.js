import * as actions from "../actionTypes";

export const incrementAction = () => {
  return {
    type: actions.INCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: actions.DECREMENT,
  };
};
