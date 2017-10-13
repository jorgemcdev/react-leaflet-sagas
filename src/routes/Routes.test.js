/* eslint no-undef: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

// Load Store
import store from './../store';

// Load Routes
import Routes from './Routes';

// Import containers / components
import HomeContainer from './../containers/HomeContainer';
import User from './../containers/UserContainer';

test('should render the Home component when visiting /', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </MemoryRouter>,
  );
  expect(component.find(HomeContainer).length).toBe(1);
});

test('should render the User Page when visiting /user/:id', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/user/2']}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </MemoryRouter>,
  );
  expect(component.find(User).length).toBe(1);
});
