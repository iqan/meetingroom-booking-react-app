import actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DO_LOGIN:
    case actionTypes.DO_REGISTER:
      return {
        ...state,
        user: action.loginDetails.user,
        token: action.loginDetails.token,
        isLoggedIn: true,
        error: null
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
