import axios from 'axios'

//const hostUrl = 'http://localhost:8000/';
const hostUrl = 'https://itechart-films.herokuapp.com/';


function addComment(id, data){
    return axios.post(`${hostUrl}api/comments/:${id}/add`, data);
}


export default {
    addComment,
}


