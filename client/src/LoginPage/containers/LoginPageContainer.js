

import React, { Component } from 'react';

import LoginPage from '../components';
import { connect } from 'react-redux';
import LoginService from '../services';
import { loginFailed, loginSucceed } from '../actions'
import { bindActionCreators } from 'redux';
import { getFormValues } from 'redux-form';


class LoginPageContainer extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        try {
            const res = await LoginService.login(this.props.userToLogin);
            if (res.status === 200) {
                this.props.loginSucceedAction(this.props.userToLogin);
                this.props.history.push(`${process.env.PUBLIC_URL}/`);
                return;
            }
        } catch (e) {
            this.props.loginFailedAction(e.response.data)
        }

    }

    render() {

        const props = {
            handleSubmit: this.onSubmit
        }
        return <LoginPage {...props} />;
    }
}

const mapStateToProps = function (state) {
    return {
        userToLogin: getFormValues('login')(state) || {},
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        loginSucceedAction: loginSucceed,
        loginFailedAction: loginFailed,
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
