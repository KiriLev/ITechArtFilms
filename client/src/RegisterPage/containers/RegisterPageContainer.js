

import React, { Component } from 'react';

import RegisterPage from '../components';
import { connect } from 'react-redux';
import RegisterService from '../services';
import { registerUser } from '../actions'
import { bindActionCreators } from 'redux';
import { getFormValues, formValueSelector } from 'redux-form';


class RegisterPageContainer extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        this.props.registerUserAction(this.props.userToRegister);
        const data = await RegisterService.addUser(this.props.userToRegister);
        this.props.history.push(`${process.env.PUBLIC_URL}/login`);
    }

    render() {
        const props = {
            handleSubmit: this.onSubmit,
        }
        return <RegisterPage {...props} />;
    }
}

const mapStateToProps = function (state) {
    return {
        userToRegister: getFormValues('register')(state) || {},
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        registerUserAction: registerUser
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterPageContainer);
