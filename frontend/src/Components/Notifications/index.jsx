import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';


const NotificationsComponent = ({ notifications }) => (
  <Notifications notifications={notifications} />
);

NotificationsComponent.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object),
};

NotificationsComponent.defaultProps = {
  notifications: [],
};

export default connect(
  state => ({ notifications: state.notifications }),
)(NotificationsComponent);
