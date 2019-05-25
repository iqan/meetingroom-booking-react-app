import actionTypes from "./actionTypes";

export function login(loginDetails) {
  return { type: actionTypes.DO_LOGIN, loginDetails: loginDetails };
}

export function loginError(err) {
  return { type: actionTypes.LOGIN_ERROR, error: err };
}

export function register(loginDetails) {
  return { type: actionTypes.DO_REGISTER, loginDetails: loginDetails };
}

export function logout() {
  return { type: actionTypes.LOGOUT };
}
