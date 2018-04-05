

import React, { Component } from 'react';

import LoginPage from '../components';
import { connect } from 'react-redux';
import LoginService from '../services';
import { bindActionCreators } from 'redux';
import { getFormValues, SubmissionError } from 'redux-form';


class LoginPageContainer extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit() {
        try {
            const res = await LoginService.login(this.props.userToLogin);
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
                this.props.history.push(`${process.env.PUBLIC_URL}/`);
                return;
            }
        } catch (e) {
            throw new SubmissionError({
                username: e.response.data.username,
                password: e.response.data.password,
                _error: 'Login failed!'
              })
        }

    }

    render() {
        const props = {
            onSubmit: this.onSubmit,
        }
        return <LoginPage {...props} />;
    }
}

const mapStateToProps = function (state) {
    return {
        userToLogin: getFormValues('login')(state) || {},
    }
}




export default connect(mapStateToProps)(LoginPageContainer);
