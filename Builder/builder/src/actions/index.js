import {
    LOGIN_SUCCESS
  } from '../constants/index'
  
  export function loginSuccess(payload) {
    return {type: LOGIN_SUCCESS, payload}
  };
  
  