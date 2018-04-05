

import React, { Component } from 'react';

import RegisterPage from '../components';
import { connect } from 'react-redux';
import RegisterService from '../services';
import { registerUser } from '../actions'
import { bindActionCreators } from 'redux';
import { getFormValues, SubmissionError } from 'redux-form';


class RegisterPageContainer extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit() {
        try {
            const data = await RegisterService.addUser(this.props.userToRegister);
            this.props.history.push(`${process.env.PUBLIC_URL}/login`);
        } catch (e){
            throw new SubmissionError({
                username: e.response.data.username,
                password: e.response.data.password,
                _error: 'Registration failed!'
              })
        }
    }

    render() {
        const props = {
            onSubmit: this.onSubmit,
        }
        return <RegisterPage {...props} />;
    }
}

const mapStateToProps = function (state) {
    return {
        userToRegister: getFormValues('register')(state) || {},
    }
}



export default connect(mapStateToProps)(RegisterPageContainer);
