import {
    CARD_SUCCESS,
    CARD_FAIL,
    PROGRESS_INCREMENT,
    RESULT_SUCCESS,
    RESULT_FAIL,
    FORM_LEVEL_CHANGE,
    FORM_NAME_CHANGE,
    FORM_PHONE_CHANGE
  } from '../constants/index';
  
  const initialState = {
    userName: '',
    phone: '',
    token: '',
    cards_passed: [],
    cards_failed: [],
    progress: 20,
    level: 'Elementary'  
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case CARD_SUCCESS:
        return state;
      case CARD_FAIL:
        return state;
      case PROGRESS_INCREMENT:
        return state;
      case RESULT_SUCCESS:
        return state;
      case RESULT_FAIL:
        return state;
      case FORM_LEVEL_CHANGE:
          return {...state, level: action.payload};
      case FORM_NAME_CHANGE:
          return {...state, userName: action.payload};
      case FORM_PHONE_CHANGE:
          return {...state, phone: action.payload};
      default:
        return state;
    }
  }
  
  export default reducer;