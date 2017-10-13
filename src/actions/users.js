import * as t from './../constants';

// List All Users
export const usersDataRequest = () => ({
  type: t.USERS_REQUEST,
});

export const usersDataSuccess = data => ({
  type: t.USERS_SUCCESS,
  payload: data,
});

export const userDataError = error => ({
  type: t.USER_ERROR,
  payload: error,
});

// List a Single User
export const userDataRequest = id => ({
  type: t.USER_REQUEST,
  payload: id,
});

export const userDataSuccess = data => ({
  type: t.USER_SUCCESS,
  payload: data,
});

export const usersDataError = error => ({
  type: t.USERS_ERROR,
  payload: error,
});
