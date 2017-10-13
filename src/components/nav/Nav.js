import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div style={{ margin: 10 }}>
    <div className="ui secondary menu">
      <Link to="/" className="item">Home</Link>
      <div className="right menu" />
    </div>
  </div>
);

export default Nav;
