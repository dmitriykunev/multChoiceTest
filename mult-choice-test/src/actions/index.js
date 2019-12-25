import {
    CARD_SUCCESS,
    CARD_FAIL,
    PROGRESS_INCREMENT,
    RESULT_SUCCESS,
    RESULT_FAIL
  } from '../constants/index'
  
  export function cardSuccess(payload) {
    return {type: CARD_SUCCESS, payload}
  };
  
  export function cardFail(payload) {
    return {type: CARD_FAIL, payload}
  };
  
  export function progressIncrement() {
    return {type: PROGRESS_INCREMENT}
  };

  export function resultSuccess(payload) {
    return {type: RESULT_SUCCESS, payload}
  };

  export function resultFail(payload) {
    return {type: RESULT_FAIL, payload}
  };
