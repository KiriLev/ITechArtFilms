import React, { Component } from 'react';

import UsersController from './controllers/UsersController';
import { Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} />
          <Route exact path={`${process.env.PUBLIC_URL}/users`} component={UsersController} />
          <Route exact path="*" component={() => <div style={{ textAlign: 'center' }}><h1>404 – страница не найдена</h1></div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
