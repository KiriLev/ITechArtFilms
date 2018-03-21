

import React, { Component } from 'react';

import axios from 'axios';
import Users from '../components/Users';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import UserService from '../services/User';


class UsersContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.getUsers = this.getUsers.bind(this);
        this.addUser = this.addUser.bind(this);
        this.getUsers();
    }

    getUsers() {
        UserService.getUsers().then((users) => {
            this.setState({
                users: users.data
            });
        }).catch(console.log);
    }
    addUser(e) {
        e.preventDefault();
        UserService.addUser(this.props.values);
        this.getUsers();
    }

    render() {
        const props = {
            onSubmit: this.addUser,
            users: this.state.users
        }
        return <Users {...props}/>;
    }
}


const mapStateToProps = function (state) {
    return {
        values: getFormValues('users')(state),
    }
}

export default connect(mapStateToProps)(UsersContainer);
