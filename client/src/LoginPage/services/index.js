import axios from 'axios'

//const hostUrl = 'http://localhost:8000/';
const hostUrl = 'https://itechart-films.herokuapp.com/';

const api = axios.create({
    withCredentials: true
});

function login(user){
    return api.post(`${hostUrl}api/users/login`, user);
}

export default {
    login
}


