// import * as Sentry from '@sentry/browser';
import { normalize } from "normalizr";
import { put } from "redux-saga/effects";
import PropTypes from "prop-types";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

export function* catchReduxError(type, error, skipToast = false) {
  if (!type) {
    throw new Error("'type' cannot be null");
  } else if (!error) {
    throw new Error("'error' cannot be null");
  }
  if (error && error.response && error.response.data) {
    if (error.response.status === 401) {
      yield put({
        type: type,
        error: error.response.data
      });
    } else if (error.response.status >= 500) {
      yield put({
        type: type,
        error: { message: "Something went worng" }
      });
    } else {
      yield put({
        type: type,
        error: error.response.data
      });
    }
  } else {
    yield put({
      type: type,
      error: error.message
    });
  }
}

export const actionInitiated = (type) => {
  if (!type) {
    return catchReduxError();
  }
  return { type: type };
};

export const normalizeData = ({ data, schema }) => {
  if (data && data.data) {
    let payload = normalize(data.data, schema);
    return payload;
  } else {
    return normalize(data, schema);
  }
};

export const actionSucceed = (type, payload) => {
  if (!type || !payload) {
    return catchReduxError(type, "Either 'type' or 'payload' is undefined");
  }
  if (payload && payload.data) {
    return {
      type: type,
      payload: payload.data
    };
  } else {
    return {
      type: type,
      payload: payload
    };
  }
};

export const getHeaderData = (response) => {
  let headers = {};
  if (!response && !response.headers) {
    throw new Error("either response or headers not found");
  }
  headers.pageSize = response.headers["x-pagination-per-page"];
  headers.totalCount = response.headers["x-pagination-total-count"];
  return omitBy(headers, isNil);
};

getHeaderData.propTypes = {
  response: PropTypes.object.isRequired
};
