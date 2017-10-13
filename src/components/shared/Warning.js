import React from 'react';
import PropTypes from 'prop-types';

const Warning = ({ message, reload }) => (
  <div className="ui warning message">
    <div className="header">Ups !</div>
    <div>
      {message}&nbsp;
      <button
        className="ui secondary basic button"
        onClick={reload}
      >Reload
      </button>
    </div>
  </div>
);

Warning.propTypes = {
  message: PropTypes.string.isRequired,
  reload: PropTypes.func.isRequired,
};

export default Warning;
