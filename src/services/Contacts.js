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

    getOne(id) {
        return axios.get(`/contacts/${id}`);
    }

    edit(contact) {
        return axios.put(`/contacts/${contact.id}`, contact);
    }
    delete(id) {
        return axios.delete(`/contacts/${id}`);
    }
}

export const contacts = new Contacts();

