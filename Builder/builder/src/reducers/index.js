import { LOGIN_SUCCESS } from "../constants/index";

const initialState = {
  username: "",
  role: "",
  token: "",
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

    default:
      return state;
  }
}

export default reducer;
