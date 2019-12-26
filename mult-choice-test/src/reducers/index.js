import {
    CARD_SUCCESS,
    CARD_FAIL,
    PROGRESS_INCREMENT,
    RESULT_SUCCESS,
    RESULT_FAIL
  } from '../constants/index';
  
  const initialState = {
    userName: '',
    phone: '',
    token: '',
    cards_passed: [],
    cards_failed: [],
    progress: 20  
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
      default:
        return state;
    }
  }
  
  export default reducer;