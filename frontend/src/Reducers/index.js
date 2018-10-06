import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';
import app from './App';
import users from './Users';
import directories from './Directories';
import permissions from './Permissions';


export default combineReducers({
  app,
  form,
  users,
  directories,
  permissions,
  notifications,
});
