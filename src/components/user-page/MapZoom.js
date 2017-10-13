import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';

// Load config values
import { MAP_ZOOM_USER } from './../../config';

const MapZoom = ({ user }) => {
  const { name, address } = user;
  return (
    <div className="ui segment" style={{ height: 435 }}>
      {address &&
        <Map
          center={[Number(address.geo.lat), Number(address.geo.lng)]}
          style={{ height: 400, width: '100%' }}
          zoom={MAP_ZOOM_USER}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[Number(address.geo.lat), Number(address.geo.lng)]}>
            <Popup>
              <span>
                {name} <br />
                <b>{address.city}</b>
              </span>
            </Popup>
          </Marker>
        </Map>
      }
    </div>
  );
};

MapZoom.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default MapZoom;
