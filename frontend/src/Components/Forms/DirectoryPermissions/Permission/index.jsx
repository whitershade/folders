import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import Select from '../../Fields/Select';
import Button from '../../../Buttons/Default';
import styles from './styles.module.css';


const Permission = ({
  field, onDeleteButtonClick, users, permissions, allUsers,
}) => (
  <div className={styles.permission}>
    <Field
      className={`${styles.usersSelect} ${styles.select}`}
      options={users}
      allOptions={allUsers}
      component={Select}
      name={`${field}.email`}
    />
    <Field
      className={`${styles.permissionsSelect} ${styles.select}`}
      component={Select}
      options={permissions}
      name={`${field}.permission`}
    />
    <Button onClick={onDeleteButtonClick}>
      Delete
    </Button>
  </div>
);

Permission.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  allUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  permissions: PropTypes.arrayOf(PropTypes.object).isRequired,
  field: PropTypes.string.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};


export default Permission;
