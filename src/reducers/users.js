import * as t from './../constants';

const initialState = {
  list: [],
  single: {},
  isLoading: false,
  error: '',
};

const users = (state = initialState, action) => {
  switch (action.type) {
    // List All users
    case t.USERS_REQUEST:
      return {
        ...state, list: [], isLoading: true, error: '',
      };
    case t.USERS_SUCCESS:
      return {
        ...state, list: action.payload, isLoading: false,
      };
    case t.USERS_ERROR:
      return {
        ...state, list: [], isLoading: false, error: action.payload,
      };

    // List a Single User
    case t.USER_REQUEST:
      return {
        ...state, single: {}, isLoading: true, error: '',
      };
    case t.USER_SUCCESS:
      return {
        ...state, single: action.payload, isLoading: false, error: '',
      };
    case t.USER_ERROR:
      return {
        ...state, single: {}, isLoading: false, error: action.payload,
      };

    default:
      return state;
  }
};

export default users;
