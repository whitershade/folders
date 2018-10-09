import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fileIcon from '../../../Images/file.svg';
import styles from './styles.module.css';


export default class File extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    const { props: { name } } = this;

    return (
      <div className={styles.file}>
        <img
          alt="file"
          src={fileIcon}
          className={styles.icon}
        />
        <span>
          {name}
          &nbsp;
        </span>
      </div>
    );
  }
}
