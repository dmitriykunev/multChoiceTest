import {
    CARD_SUCCESS
  } from '../constants/index';
  
  const initialState = {
    card: {question: '', a: '', b: '', c: '', d: ''},
    answer: '',
    level: '',
    id: '',
    theory: '' 
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case CARD_SUCCESS:
        return state;
      
      default:
        return state;
    }
  }
  
  export default reducer;