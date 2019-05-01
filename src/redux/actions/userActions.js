import actionTypes from "./actionTypes";

export function login(loginDetails) {
  return { type: actionTypes.DO_LOGIN, user: loginDetails };
}

export function loginError(err) {
  return { type: actionTypes.LOGIN_ERROR, error: err };
}
