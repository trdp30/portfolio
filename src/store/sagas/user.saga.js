/* eslint-disable no-useless-catch */
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { usersActionTypes as types } from "../constants/action-types";
import { normalizeData, catchReduxError } from "../actions/general.action";
import { userSchema } from "../schemas";
import { storeUserData } from "../actions/user.action";

//----------------------- callbacks -----------------------

//----------------------- workers -----------------------

function* postUserSaga({ payload }) {
  try {
    yield put({ type: types.REQUEST_INIT });
    const normalizedData = yield call(
      normalizeData,
      { data: { ...payload, id: payload.email }, schema: userSchema },
      userSchema
    );
    yield put(storeUserData(normalizedData));
  } catch (error) {
    yield call(catchReduxError, types.REQUEST_FAILED, error);
  }
}

/*-------------------------Watchers-------------------------*/

function* postUser() {
  yield takeLatest("USER_POST_REQUEST", postUserSaga);
}

export default function* rootSaga() {
  yield all([fork(postUser)]);
}
