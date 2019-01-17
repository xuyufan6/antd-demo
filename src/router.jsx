import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Login from './pages/Login';
import Admin from './admin';
import Home from './pages/Home';
import Buttons from './pages/UI/Buttons';

const ERouter = () => (
  <HashRouter>
    <App>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/"
          render={() => (
            <Admin>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/ui/buttons" component={Buttons} />

                <Redirect to="/home" />
              </Switch>
            </Admin>
          )}
        />
      </Switch>
    </App>
  </HashRouter>
);

export default ERouter;
