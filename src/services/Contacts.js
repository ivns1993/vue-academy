import axios from 'axios';

class Contacts {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }

    getAll() {
        return axios.get('/contacts');
    }

    add(data) {
        return axios.post('/contacts', data);
    }
}

export const contacts = new Contacts();

