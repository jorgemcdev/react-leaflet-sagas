import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => (
  <div className="card three wide column">
    <div className="content">
      <div className="header">
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </div>
      <div className="meta">
        {user.username}
      </div>
      <div className="description">
        {user.email}
      </div>
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
