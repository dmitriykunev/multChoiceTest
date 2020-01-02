import {
    CARD_SUCCESS,
    CARD_FAIL,
    PROGRESS_INCREMENT,
    RESULT_SUCCESS,
    RESULT_FAIL,
    GENERATE_TOKEN,
    FORM_LEVEL_CHANGE,
    FORM_NAME_CHANGE,
    FORM_PHONE_CHANGE,
    POPULATE_TEST,
    CARD_SHOWED,
    UPDATE_AVAILABLE_CARDS,
    OPTION_UPDATE,
    UPDATE_CORRECT_ANSWER,
    CLEAR_PREVIOUS_ANSWER
  } from '../constants/index';
  
  const initialState = {
    userName: '',
    phone: '',
    token: '',
    cards: [],
    cards_shown: [],
    cards_passed: [],
    cards_failed: [],
    answer: '',
    correct_answer: '',
    progress: 5,
    level: 'Elementary'  
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case CARD_SUCCESS:
        const newSuccessCard = state.cards_passed.push(action.payload);
        return {...state, newSuccessCard};
      case CARD_FAIL:
        const newFailCard = state.cards_failed.push(action.payload);
        return {...state, newFailCard};
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
      case OPTION_UPDATE:
        return {...state, answer: action.payload};
      case POPULATE_TEST:
        return {...state, cards: action.payload};
      case CLEAR_PREVIOUS_ANSWER:
        return {...state, answer: ''};
      case UPDATE_CORRECT_ANSWER:
        return {...state, correct_answer: action.payload};
      case GENERATE_TOKEN:
        return {...state, token: action.token};
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