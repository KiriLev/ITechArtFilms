

import React, { Component } from 'react';

import axios from 'axios';
import Users from '../components/Users';

export default class UsersContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

            users: [],
        }
        this.getUsers = this.getUsers.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);

    }
    onFieldChange(e){
        this.setState({
            newUsername: e.target.value
        });
    }
    getUsers() {
        const users = axios.get('/api/users')
            .then(() => {
                this.setState({
                    users
                });
            });
    }
    addUser(){
        axios.post('/api/users', {
            username: this.state.newUsername,
            hashedPassword: '2212091029',
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        this.getUsers();
        const props = {
            users: this.state.users,
            newUsername: this.state.newUsername
        }
        return <Users {...props} />;
    }
}