import {
  LOGIN_SUCCESS,
  TOKEN_OK,
  TOKEN_FAIL,
  ROLE_OK,
  HANDLE_SIDEBAR_ITEM_CHOSEN,
  POPULATE_CARDS,
  LEVEL_CHANGE
} from "../constants/index";

const initialState = {
  username: "",
  role: "",
  token: "",
  sidebarItemChosen: "dashboard",
  cards: [],
  card: { question: "", a: "", b: "", c: "", d: "" },
  answer: "",
  level: "Elementary",
  id: "",
  theory: "",
  author: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.data[0].username,
        role: action.data[0].role,
        token: action.data[0].token
      };
    case TOKEN_OK:
      return {
        ...state,
        username: action.data.username,
        role: action.data.role,
        token: action.data.token
      };
    case TOKEN_FAIL:
      return initialState;
    case ROLE_OK:
      return state;
    case HANDLE_SIDEBAR_ITEM_CHOSEN:
      return { ...state, sidebarItemChosen: action.value };
    case POPULATE_CARDS:
      return { ...state, cards: action.cards };
    case LEVEL_CHANGE:
      return { ...state, level: action.level };
    default:
      return state;
  }
}

export default reducer;
