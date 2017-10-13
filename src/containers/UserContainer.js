import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// Import Action Creators
import { userDataRequest } from './../actions/users';

// Import Components
import UserDetails from './../components/user-page/UserDetails';
import MapZoom from './../components/user-page/MapZoom';

import Loading from './../components/shared/Loading';
import Warning from './../components/shared/Warning';

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.handleReload = this.handleReload.bind(this);
  }
  componentDidMount() {
    this.props.userDataRequest(this.props.match.params.id);
  }

  handleReload() {
    this.props.userDataRequest(this.props.match.params.id);
  }

  render() {
    const { single, isLoading, error } = this.props;
    return (
      <div className="ui grid full-height">
        {error &&
        <div className="sixteen wide column">
          <Warning message={error} reload={this.handleReload} />
        </div>
        }
        <div className="six wide column">
          {isLoading ? <Loading /> : <UserDetails user={single} />}
        </div>
        <div className="ten wide column">
          <MapZoom user={single} />
        </div>
      </div>
    );
  }
}

UserContainer.defaultProps = {
  single: {},
};

UserContainer.propTypes = {
  userDataRequest: PropTypes.func.isRequired,
  single: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  single: state.users.single,
  isLoading: state.users.isLoading,
  error: state.users.error,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ userDataRequest }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
