/* eslint no-undef: 0 */
import React from 'react';
import { shallow } from 'enzyme';

import DefaultLayout from './DefaultLayout';

test('Renders DefaultLayout', () => {
  const component = shallow(
    <DefaultLayout />,
  );
  expect(component).toMatchSnapshot();
});
