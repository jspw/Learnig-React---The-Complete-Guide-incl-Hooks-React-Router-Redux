import * as actions from "../actionTypes";

const initialState = {
  loading: true,
  users: [],
  error: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };

    case actions.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
