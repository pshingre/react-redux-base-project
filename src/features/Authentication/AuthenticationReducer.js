import {
  START_LOGGED_IN_USER,
  LOGGED_IN_USER,
  LOGGED_IN_USER_SUCCESS,
  LOGGED_IN_USER_FAILURE,
  LOGGED_OUT_USER,
} from './actionTypes';

const initialState = {
  username: '',
  firstname: '',
  lastname: '',
  userid: '',
  isAuthenticated: false,
  isauthenticating: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return {
        ...state,
        username: action.value.username,
        firstname: action.value.firstname,
        lastname: action.value.lastname,
        userid: action.value.userid,
        isAuthenticated: action.value.isAuthenticated,
      };
    case START_LOGGED_IN_USER:
      return state;
    case LOGGED_IN_USER_SUCCESS:
      return state;
    case LOGGED_IN_USER_FAILURE:
      return state;
    case LOGGED_OUT_USER:
      return state;
    default:
      return state;
  }
};
