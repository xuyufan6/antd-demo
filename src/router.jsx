import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Login from './pages/Login';
import Admin from './admin';
import Home from './pages/Home';
import Buttons from './pages/UI/Buttons';
import Modals from './pages/UI/Modals';
import Loadings from './pages/UI/Loadings';
import Notifications from './pages/UI/Notifications';
import Messages from './pages/UI/Messages';
import Tabs from './pages/UI/Tabs';
import Gallery from './pages/UI/Gallery';
import Carousels from './pages/UI/Carousels';

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
                <Route path="/ui/modals" component={Modals} />
                <Route path="/ui/loadings" component={Loadings} />
                <Route path="/ui/notifications" component={Notifications} />
                <Route path="/ui/messages" component={Messages} />
                <Route path="/ui/tabs" component={Tabs} />
                <Route path="/ui/gallery" component={Gallery} />
                <Route path="/ui/carousels" component={Carousels} />

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
