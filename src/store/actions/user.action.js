import { usersActionTypes as types } from "../constants/action-types";

export function postUser(payload) {
  return {
    type: types.POST_REQUEST,
    payload
  };
}

export function storeUserData(payload) {
  return {
    type: types.REQUEST_SUCCEED,
    payload
  };
}
