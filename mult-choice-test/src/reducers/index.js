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
    CARD_SHOWED,
    UPDATE_AVAILABLE_CARDS
  } from '../constants/index';
  
  const initialState = {
    userName: '',
    phone: '',
    token: '',
    cards: [],
    cards_shown: [],
    cards_passed: [],
    cards_failed: [],
    progress: 5,
    level: 'Elementary'  
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case CARD_SUCCESS:
        return state;
      case CARD_FAIL:
        return state;
      case CARD_SHOWED:
        const newCard = state.cards_shown.push(action.cardShown);
        return {...state, newCard};
      case UPDATE_AVAILABLE_CARDS:
        return {...state, cards: action.payload};
      case PROGRESS_INCREMENT:
        return {...state, progress: action.payload};
      case RESULT_SUCCESS:
        return state;
      case RESULT_FAIL:
        return state;
      case POPULATE_TEST:
        return {...state, cards: action.payload};
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