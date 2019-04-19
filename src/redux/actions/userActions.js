import actionTypes from './actionTypes';

export function login(loginDetails) {
  return { type: actionTypes.DO_LOGIN, user: loginDetails }
}