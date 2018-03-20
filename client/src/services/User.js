import axios from 'axios'

//const hostUrl = 'http://localhost:8000/';
const hostUrl = 'https://itechart-films.herokuapp.com/';


function addUser(user){
    return axios.patch(`${hostUrl}api/users/add`, user);
}
async function getUsers(){
    let users = {};
    try {

        users = await axios.get(`${hostUrl}api/users`)
    } catch(e){
        throw e;
    }
    return users;
}


export default {
    addUser,
    getUsers
}


