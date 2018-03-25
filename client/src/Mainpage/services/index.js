

import axios from 'axios'

//const hostUrl = 'http://localhost:8000/';
const hostUrl = 'https://itechart-films.herokuapp.com/';




function getFilms(offset = 0, amount = 5) {
    return axios.get(hostUrl + `api/films/`, {
      params: { offset, amount }
    });
}

function getFilm(id) {
    return axios.get(`${hostUrl}api/films/${id}`);
}

export default {
    getFilms,
    getFilm
}


