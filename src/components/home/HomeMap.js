import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';

// Load config values
import { MAP_CENTER, MAP_ZOOM } from './../../config';

const HomeMap = ({ users }) => (
  <Map center={MAP_CENTER} style={{ height: 300, width: '100%' }} zoom={MAP_ZOOM}>
    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    {users.map(user => (
      <Marker
        position={[Number(user.address.geo.lat), Number(user.address.geo.lng)]}
        key={user.id}
      >
        <Popup>
          <span>
            {user.name}<br />
            {user.address && <b>{user.address.city}</b>}
          </span>
        </Popup>
      </Marker>
    ))}
  </Map>
);

HomeMap.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }),
    }).isRequired,
  })).isRequired,
};

export default HomeMap;
