import axios from 'axios';

const URL = 'http://localhost:3001';
// const URL = 'http://192.168.0.229:3001';

class DataTransaction {
  login(payload) {
    return axios.post(URL + '/login', payload);
  }
  
  token(payload) {
    return axios.post(URL + '/token', payload);
  }
  modify(payload) {
    return axios.put(URL + '/modify', payload);
  }
  getUsers() {
    return axios.get(URL + '/getUsers');
  }
  remove(payload) {
    return axios.post(URL + '/remove', payload);
  }
}

export default new DataTransaction();