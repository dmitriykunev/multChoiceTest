import { LOGIN_SUCCESS, INITIATE_APPLICATION } from "../constants/index";

const initialState = {
  username: "",
  role: "",
  token: "",
  currentContent: "",
  card: { question: "", a: "", b: "", c: "", d: "" },
  answer: "",
  level: "",
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
    case INITIATE_APPLICATION:
      console.log(action);
      return {
        ...state,
        username: action.data.username,
        role: action.data.role,
        token: action.data.token
      };

    default:
      return state;
  }
}

export default reducer;
