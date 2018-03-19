import axios from 'axios'

const hostUrl = 'http://localhost:8000/';

function addUser(user){
    return axios.patch(`${hostUrl}api/users/add`, user);
}

export default {
    addUser,
}


