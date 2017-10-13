import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// Import Action Creators
import { usersDataRequest } from './../actions/users';

// Import Components
import UsersList from './../components/home/UsersList';
import HomeMap from './../components/home/HomeMap';

// Import Common Components
import Loading from './../components/shared/Loading';
import Warning from './../components/shared/Warning';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.usersDataRequest();
    this.handleReload = this.handleReload.bind(this);
  }

  handleReload() {
    this.props.usersDataRequest();
  }

  render() {
    const { list, isLoading, error } = this.props;
    return (
      <div className="ui grid">
        {error &&
        <div className="sixteen wide column">
          <Warning message={error} reload={this.handleReload} />
        </div>
        }
        <div className="sixteen wide column">
          <div className="ui segment">
            <HomeMap users={list} />
          </div>
        </div>
        <div className="ui center">
          {isLoading ? <Loading /> : <UsersList users={list} /> }
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  usersDataRequest: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  list: state.users.list,
  isLoading: state.users.isLoading,
  error: state.users.error,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ usersDataRequest }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
