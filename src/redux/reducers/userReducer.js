import actionTypes from "../actions/actionTypes";

const initialState = {
  user: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DO_LOGIN:
    case actionTypes.DO_REGISTER:
      alert("user :" + JSON.stringify(action.user));
      return {
        ...state
      };
    case actionTypes.LOGIN_ERROR:
      alert("error while loggin in: " + JSON.stringify(action.error));
      return state;
    default:
      return state;
  }
}
