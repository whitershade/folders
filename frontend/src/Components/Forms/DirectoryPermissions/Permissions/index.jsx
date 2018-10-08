/* eslint-disable no-magic-numbers */
import React from 'react';
import PropTypes, { objectOf, oneOfType } from 'prop-types';
import { isEmpty } from 'lodash';
import Button from '../../../Buttons/Default';
import Permission from '../Permission';
import EmptyPermissions from '../EmptyPermissions';
import styles from './styles.module.css';


const Permissions = ({
  fields, users, allUsers, permissions,
}) => {
  const onAddButtonClick = () => fields.push({});
  const onDeleteButtonClick = index => () => fields.remove(index);

  return (
    <React.Fragment>
      <Button onClick={onAddButtonClick} className={styles.addButton}>
        Add new
      </Button>

      { isEmpty(fields) ? <EmptyPermissions /> : null }

      { fields.map((field, index) => (
        <Permission
          key={field}
          users={users}
          field={field}
          allUsers={allUsers}
          permissions={permissions}
          onDeleteButtonClick={onDeleteButtonClick(index)}
        />
      )) }
    </React.Fragment>
  );
};

Permissions.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  allUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  permissions: PropTypes.arrayOf(PropTypes.object).isRequired,
  fields: objectOf(oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.func,
    PropTypes.number,
    PropTypes.string])).isRequired,
};

export default Permissions;
