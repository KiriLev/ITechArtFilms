

import React, { Component } from 'react';

import axios from 'axios';
import Users from '../components/Users';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import UserService from '../services/User';


class UsersContainer extends Component {

    constructor(props) {
        super(props);

        this.getUsers = this.getUsers.bind(this);
        this.addUser = this.addUser.bind(this);

    }

    getUsers() {
        const users = axios.get('/api/users')
            .then(() => {
                this.setState({
                    users
                });
            });
    }
    addUser(e) {
        e.preventDefault();
        UserService.addUser(this.props.values);
    }

    render() {
        // this.getUsers();
        const props = {
            onSubmit: this.addUser,
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
