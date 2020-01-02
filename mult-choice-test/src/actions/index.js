import {
    CARD_SUCCESS,
    CARD_FAIL,
    PROGRESS_INCREMENT,
    RESULT_SUCCESS,
    RESULT_FAIL,
    FORM_LEVEL_CHANGE,
    FORM_NAME_CHANGE,
    FORM_PHONE_CHANGE,
    POPULATE_TEST,
    GENERATE_TOKEN,
    CARD_SHOWED,
    UPDATE_AVAILABLE_CARDS,
    OPTION_UPDATE,
    UPDATE_CORRECT_ANSWER
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

  export function cardShowed(payload) {
    return {type: CARD_SHOWED, payload}
  };

  export function updateAvailableCards(payload) {
    return {type: UPDATE_AVAILABLE_CARDS, payload}
  };

  export function generateToken(payload) {
    return {type: GENERATE_TOKEN, payload}
  };

  export function optionUpdate(payload) {
    return {type: OPTION_UPDATE, payload}
  };

  export function updateCorrectAnswer(payload) {
    return {type: UPDATE_CORRECT_ANSWER, payload}
  };
