import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ user }) => {
  const {
    id, name, username, email, phone, website, address, company,
  } = user;
  return (
    <div>
      <h3>User Page</h3>
      {(address && company) &&
        <ul>
          <li><b>Id:</b> {id}</li>
          <li><b>Name:</b> {name}</li>
          <li><b>UserName</b> {username}</li>
          <li><b>Email</b> {email}</li>

          <li><b>Address</b>
            <ul>
              <li>street {address.street}</li>
              <li>suite {address.suite}</li>
              <li>city {address.city}</li>
              <li>zipcode {address.zipcode}</li>
              <li>Geo [ {address.geo.lat} , {address.geo.lng} ]</li>
            </ul>
          </li>

          <li><b>phone</b> {phone}</li>
          <li><b>website</b> {website} </li>

          <li><b>Company</b>
            <ul>
              <li>Name: {company.name} </li>
              <li>catchPhrase: {company.catchPhrase}</li>
              <li>bs {company.bs}</li>
            </ul>
          </li>
        </ul>
      }
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }),
    }).isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      catchPhrase: PropTypes.string.isRequired,
      bs: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default UserDetails;
