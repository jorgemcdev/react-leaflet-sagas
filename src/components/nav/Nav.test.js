/* eslint no-undef: 0 */
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Nav from './Nav';

test('Renders Navigation Header', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>,
  );
  expect(component).toMatchSnapshot();
});
