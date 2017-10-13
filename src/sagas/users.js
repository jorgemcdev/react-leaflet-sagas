import { delay } from 'redux-saga';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

// Import Delay config Var
import { API_DELAY } from './../config';

// Import Constants
import { USERS_REQUEST, USER_REQUEST } from './../constants';

// Import Action Creators
import {
  usersDataSuccess, usersDataError,
  userDataSuccess, userDataError,
} from './../actions/users';

// API
import api from './../api';

function* getAllUsers() {
  yield delay(API_DELAY);
  try {
    const result = yield call(api.getUsers);
    if (result.status === 200) {
      yield put(usersDataSuccess(result.data));
    } else {
      yield put(usersDataError('Something went wrong'));
    }
  } catch (err) {
    yield put(usersDataError('Something went wrong, Please try again.'));
  }
}

function* getOne(action) {
  yield delay(API_DELAY);
  try {
    const result = yield call(api.getSingleUser, action.payload);
    if (result.status === 200) {
      yield put(userDataSuccess(result.data));
    } else {
      yield put(userDataError('Something went wrong'));
    }
  } catch (err) {
    yield put(usersDataError('Something went wrong, Please try again.'));
  }
}

// Watcher Sagas
const usersSagas = [
  takeLatest(USERS_REQUEST, getAllUsers),
  takeEvery(USER_REQUEST, getOne),
];

export default usersSagas;
