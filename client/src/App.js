import React, { Component } from 'react';

import Mainpage from './Mainpage';
import FilmPage from './FilmPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

import { Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Mainpage.default}/>
          <Route exact path={`${process.env.PUBLIC_URL}/register`} component={RegisterPage.default}/>
          <Route exact path={`${process.env.PUBLIC_URL}/films/:id`} component={FilmPage.default}/>
          <Route exact path="*" component={() => <div style={{ textAlign: 'center' }}><h1>404 – страница не найдена</h1></div>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
