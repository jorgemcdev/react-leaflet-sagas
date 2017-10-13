import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import Layouts
import DefaultLayout from './../layouts/DefaultLayout';

// Import containers
import Home from './../containers/HomeContainer';
import User from './../containers/UserContainer';

// Import NotFound component
import NotFound from './../components/shared/NotFound';

// Our Routes
const Routes = () => (
  <DefaultLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user/:id" component={User} />
      <Route component={NotFound} />
    </Switch>
  </DefaultLayout>
);

export default Routes;
