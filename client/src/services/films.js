

import axios from 'axios'

//const hostUrl = 'http://localhost:8000/';
const hostUrl = 'https://itechart-films.herokuapp.com/';


export function getFilms(offset = 0, amount = 5) {
    return axios.get(hostUrl + `api/films/`, {
      params: { offset, amount }
    });
}

export function getFilm(id) {
    return axios.get(`${hostUrl}api/films/${id}`);
}




