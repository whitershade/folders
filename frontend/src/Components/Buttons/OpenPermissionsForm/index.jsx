import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import lockFolder from '../../../Images/lock.svg';


const OpenPermissionsFormButton = ({ onClick }) => (
  <div
    className={styles.button}
    tabIndex="0"
    role="button"
    onClick={onClick}
    onKeyPress={onClick}
  >
    <img
      src={lockFolder}
      alt="edit permissions"
    />
  </div>
);

OpenPermissionsFormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default OpenPermissionsFormButton;
