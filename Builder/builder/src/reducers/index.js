import {
  LOGIN_SUCCESS
  } from '../constants/index';
  
  const initialState = {
    login: '',
    role: '',
    token: '',
    card: {question: '', a: '', b: '', c: '', d: ''},
    answer: '',
    level: '',
    id: '',
    theory: '',
    author: ''
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {...state, login: action.payload.login, role: action.payload.role};
      
      default:
        return state;
    }
  }
  
  export default reducer;