import axios from 'axios';

const URL = 'http://localhost:3001';

class DataTransaction {
   start(payload) {
        return axios.post(URL + '/start', payload);
    }
}

export default new DataTransaction();