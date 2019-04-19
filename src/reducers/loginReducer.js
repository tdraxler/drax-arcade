import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/loginAction';

const initialState = {
  username: null,
  loading: false,
  loggedIn: false,
  error: null
};

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_BEGIN:
      return {
        username: null,
        loading: true,
        loggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        username: action.payload.username,
        loading: true,
        loggedIn: false
      };
    case LOGIN_FAILURE:
      return {
        username: null,
        loading: false,
        loggedIn: false,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export default loginReducer;