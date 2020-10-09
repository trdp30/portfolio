import { usersActionTypes as types } from "../constants/action-types";
import { combineReducers } from "redux";
import { getAllIds, getById } from "./data.reducer";

const initialState = {
  isLoading: false
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_INIT:
      return {
        ...state,
        isLoading: true
      };
    case types.REQUEST_SUCCEED:
      return {
        ...state,
        isLoading: false
      };
    case types.REQUEST_FAILED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

const data = combineReducers({
  byId: getById("user"),
  allIds: getAllIds("user")
});

const userReducer = combineReducers({
  request,
  data
});

export default userReducer;
