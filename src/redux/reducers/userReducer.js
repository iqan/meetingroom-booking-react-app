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
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
