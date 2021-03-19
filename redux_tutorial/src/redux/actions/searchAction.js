
import * as actions from "../actionTypes";

const searchAction = (key) => {
  return {
    type: actions.SEARCH_KEY,
    payload: key,
  };
};

export default searchAction;