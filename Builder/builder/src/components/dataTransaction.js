import axios from "axios";

const URL = "http://localhost:3001";
// const URL = 'http://192.168.0.229:3001';

class DataTransaction {
  login(payload) {
    return axios.post(URL + "/admin/login", payload);
  }
  token(payload) {
    return axios.get(URL + "/admin/token", payload);
  }
  register(payload) {
    return axios.post(URL + "/admin/register", payload);
  }
  cards(payload) {
    return axios.post(URL + "/cards", payload);
  }
  cardsAdvanced() {
    return axios.get(URL + "/cards/advanced");
  }
  cardsUppperIntermediate() {
    return axios.get(URL + "/cards/upperintermediate");
  }
  cardsIntermediate() {
    return axios.get(URL + "/cards/intermediate");
  }
  cardsPreIntermediate() {
    return axios.get(URL + "/cards/preintermediate");
  }
  cardsElementary() {
    return axios.get(URL + "/cards/elementary");
  }
}

export default new DataTransaction();
