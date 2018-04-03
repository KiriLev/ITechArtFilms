

import axios from 'axios'

//const hostUrl = 'http://localhost:8000/';
const hostUrl = 'https://itechart-films.herokuapp.com/';

const api = axios.create({
    withCredentials: true
});

export function getFilms(offset = 0, amount = 5) {
    return api.get(hostUrl + `api/films/`, {
      params: { offset, amount },
    });
}

export function getFilm(id) {
    return api.get(`${hostUrl}api/films/${id}`);
}




