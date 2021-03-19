import * as actions from "../actionTypes";
const searchKeyReducer = (searchKey = '', action) => {
  switch (action.type) {
    case actions.SEARCH_KEY:
      return action.payload;
    default:
      return searchKey;
  }
};

export default searchKeyReducer;
