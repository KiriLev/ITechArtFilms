import React, { Component } from 'react';

import MyAppBar from '../components';
import { GlobalServices } from '../../services';


class MyAppBarContainer extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state={
            key:0,
        }
    }


    logout(){
        localStorage.removeItem('user');
        GlobalServices.logout();
        this.render();
        this.setState({ key: Math.random() });

    }

    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        const props = {
            user,
            onLogout: this.logout,
            key: this.state.key //hack for rerendering on logout
        }
        return <MyAppBar {...props} />;
    }
}

export default MyAppBarContainer;