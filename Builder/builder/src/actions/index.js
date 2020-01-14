import {
    CARD_SUCCESS
  } from '../constants/index'
  
  export function cardSuccess(payload) {
    return {type: CARD_SUCCESS, payload}
  };
  
  