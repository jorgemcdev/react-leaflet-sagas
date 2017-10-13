import React from 'react';
import PropTypes from 'prop-types';

import Nav from './../components/nav/Nav';

const DefaultLayout = ({ children }) => (
  <div className="ui container">
    <div className="sixteen wide column">
      <Nav />
    </div>
    <div className="sixteen wide column">
      { children }
    </div>
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
