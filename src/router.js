import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';

// Import containers / components
import Home from './containers/HomeContainer';
import User from './containers/UserContainer';
import NotFound from './components/NotFound';

const AppRoutes = () => (
  <BrowserRouter>
    <DefaultLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </DefaultLayout>
  </BrowserRouter>
);

export default AppRoutes;
