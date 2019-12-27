import {
    CARD_SUCCESS,
    CARD_FAIL,
    PROGRESS_INCREMENT,
    RESULT_SUCCESS,
    RESULT_FAIL,
    FORM_LEVEL_CHANGE,
    FORM_NAME_CHANGE,
    FORM_PHONE_CHANGE,
    POPULATE_TEST
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

  export function formLevelChange(payload) {
    return {type: FORM_LEVEL_CHANGE, payload}
  };

  export function formNameChange(payload) {
    return {type: FORM_NAME_CHANGE, payload}
  };

  export function formPhoneChange(payload) {
    return {type: FORM_PHONE_CHANGE, payload}
  };

  export function populateTest(payload) {
    return {type: POPULATE_TEST, payload}
  };
