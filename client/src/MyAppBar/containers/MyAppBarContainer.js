import React, { Component } from 'react';

import MyAppBar from '../components';
import { GlobalServices } from '../../services';


class MyAppBarContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
        this.getUser = this.getUser.bind(this);
        this.logout = this.logout.bind(this);
        this.getUser();
    }

    async getUser() {
        const user = await GlobalServices.getSessionUser();
        this.setState({ user: user.data[0] });
    }
    logout(){
        GlobalServices.logout();
        this.setState({user: {}});
    }
    render() {
        const props = {
            user: this.state.user,
            onLogout: this.logout,
        }
        return <MyAppBar {...props} />;
    }
}

export default MyAppBarContainer;